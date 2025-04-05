import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/app/layouts/MainLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ErrorPage } from '@/pages/ErrorPage';

import '@/app/styles/App.css';
import { Suspense } from 'react';
import { QuestionsPage, QuestionsPageSkeleton } from '@/pages/QuestionsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: 'questions',
        element:
          <Suspense fallback={<QuestionsPageSkeleton />}>
            <QuestionsPage />
          </Suspense>,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
