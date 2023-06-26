import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';
import MainLayout from '../layout/MainLayout';
import NotFound from '../../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
]);
