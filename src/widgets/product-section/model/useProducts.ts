import { useEffect, useMemo, useState } from 'react';
import type { Product } from '@/entities/product/model/types.ts';
import { getProducts } from '@/entities/product';

interface UseProductsProps {
  sort?: string;
  order?: 'asc' | 'desc';
  limit?: number;
}

export const useProducts = (params: UseProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const searchQueryParams = useMemo(() => {
    const searchParams = new URLSearchParams();

    const paramsArray = Object.entries(params);

    paramsArray.forEach(([key, value]) => {
      if (value === null || value === undefined) return;

      searchParams.append(`_${key}`, String(value));
    });

    searchParams.append('_page', String(page));

    return searchParams.toString();
  }, [params, page]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts(searchQueryParams);
        if (data.length === 0) {
          setHasMore(false);
          return;
        }

        if (page > 1) {
          setProducts((prev) => [...prev, ...data]);
          return;
        }

        setProducts(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    void loadProducts();
  }, [searchQueryParams]);

  const loadMoreProducts = () => {
    if (!hasMore) return;

    setPage((prev) => prev + 1);
  };

  return {
    products,
    isLoading,
    loadMoreProducts,
    hasMore,
  };
};
