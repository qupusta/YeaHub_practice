import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { MainLayout } from '@/app/layouts/MainLayout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ErrorPage } from '@/pages/ErrorPage';
import { QuestionDetailPage } from '@/pages/QuestionDetailPage';
import { QuestionContentSkeleton } from '@/widgets/QuestionDetail';
import { QuestionsPage, QuestionsPageSkeleton } from '@/pages/QuestionsPage';

import '@/app/styles/App.css';

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
