import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/app/layouts/MainLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ErrorPage } from '@/pages/ErrorPage';

import '@/app/styles/App.css';
import { Suspense } from 'react';
import { QuestionsPage, QuestionsPageSkeleton } from '@/pages/QuestionsPage';
import { QuestionDetailPage } from '@/pages/QuestionDetailPage';
import { QuestionContentSkeleton } from '@/widgets/QuestionDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'questions',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<QuestionsPageSkeleton />}>
                <QuestionsPage />
              </Suspense>
            ),
          },
          {
            path: ':questionId',
            element: (
              <Suspense fallback={<QuestionContentSkeleton />}>
                <QuestionDetailPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
