import { RouterProvider } from 'react-router/dom';
import { router } from '@/app/router';

export const AppProvider = () => {
  return <RouterProvider router={router} />;
};
