import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home';
import FlexPage from '../pages/FlexPage';
import GridBox from '../pages/GridBox';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: 'flex',
      element: <FlexPage />
    },
    {
      path: 'grid',
      element: <GridBox />
    }]
  },
]);

export default router;