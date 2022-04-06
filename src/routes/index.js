import React from 'react';

const WelcomePage = React.lazy(() => import('pages/Welcome'));
const NotFoundPage = React.lazy(() => import('components/NotFound'));

const routes = [
  {
    exact: true,
    element: <WelcomePage />,
    path: '/'
  },
  {
    element: <NotFoundPage />
  }
];

export default routes;
