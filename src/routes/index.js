import React from 'react';

const HomePage = React.lazy(() => import('pages/Home'));
const ScanPage = React.lazy(() => import('pages/Scan'));
const ProfilePage = React.lazy(() => import('pages/Profile'));
const NotFoundPage = React.lazy(() => import('components/NotFound'));

const routes = [
  {
    exact: true,
    element: <HomePage />,
    path: '/'
  },
  {
    exact: true,
    element: <ScanPage />,
    path: '/scan'
  },
  {
    exact: true,
    element: <ProfilePage />,
    path: '/profile'
  },
  {
    element: <NotFoundPage />
  }
];

export default routes;
