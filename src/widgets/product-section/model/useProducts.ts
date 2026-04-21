import { useEffect, useMemo, useState } from 'react';
import type { Product } from '@/entities/product/model/types.ts';
import { getProducts } from '@/entities/product';

export interface UseProductsProps {
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

    if (params.sort) {
      searchParams.append('_sort', params.order === 'desc' ? `-${params.sort}` : params.sort);
    }

    if (params.limit !== null && params.limit !== undefined) {
      searchParams.append('_per_page', String(params.limit));
    }

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

        if (data.length < (params.limit ?? Infinity)) {
          setHasMore(false);
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
