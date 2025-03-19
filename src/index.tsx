import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/providers/router/router';

const root = document.getElementById('root');

createRoot(root as HTMLElement).render(<RouterProvider router={router} />);
