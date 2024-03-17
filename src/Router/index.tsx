import { ROUTES } from '@/Constants';
import { About, Hello, Projects, Contact } from '@/Pages';
import { Layout } from '@/Components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTES.hello,
        element: <Hello />,
      },
      {
        path: ROUTES.about,
        element: <About />,
      },
      {
        path: ROUTES.projects,
        element: <Projects />,
      },
      {
        path: ROUTES.contact,
        element: <Contact />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
