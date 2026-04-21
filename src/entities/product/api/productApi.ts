import type { Product } from '@/entities/product/model/types.ts';

const BASE_URL = 'http://localhost:3001';

export const getProducts = async (searchQueryParams?: string): Promise<Product[]> => {
  const query = searchQueryParams ? `?${searchQueryParams}` : '';

  const res = await fetch(`${BASE_URL}/products${query}`);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = (await res.json()) as { data: Product[] };

  return data.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  return res.json();
};
