import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/app/layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
]);
