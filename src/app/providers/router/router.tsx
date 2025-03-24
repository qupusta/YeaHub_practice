import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/app/layouts/MainLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ErrorPage } from '@/pages/ErrorPage';

import '@/app/styles/App.css';
import { QuestionsList } from '@/pages/QuestionsList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: 'questions',
        element: <QuestionsList />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
