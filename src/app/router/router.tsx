import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';
import MainLayout from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
]);
