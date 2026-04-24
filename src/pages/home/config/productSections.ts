export const TOP_PRODUCTS_PARAMS = {
  sort: 'rating',
  order: 'desc',
  limit: 8,
} as const;

export const NEW_PRODUCTS_PARAMS = {
  sort: 'reviews',
  order: 'asc',
  limit: 8,
} as const;
