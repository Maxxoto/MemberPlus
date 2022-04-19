import React, { Suspense } from 'react';
import Page from 'components/Page';

import { Routes, Route } from 'react-router-dom';

import routes from 'routes';

function Content() {
  return (
    <Page>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.path || '#'} />
          ))}
        </Routes>
      </Suspense>
    </Page>
  );
}

export default Content;
