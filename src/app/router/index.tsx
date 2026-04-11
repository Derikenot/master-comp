import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@/app/layouts';
import { Home } from '@/pages/home';
import { Category } from '@/pages/category';
import { Product } from '@/pages/product';
import { Cart } from '@/pages/cart';
import { NotFound } from '@/pages/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'category/:slug', element: <Category /> },
      { path: 'product/:id', element: <Product /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);
