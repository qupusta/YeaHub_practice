import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/providers/router/router';
import { StoreProvider } from './app/providers/store';

const root = document.getElementById('root');

createRoot(root as HTMLElement).render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);
