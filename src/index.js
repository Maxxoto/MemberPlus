import React from 'react';
import * as ReactDOM from 'react-dom/client';

import { getActions as getSWActions } from 'store/sw';
import * as serviceWorker from './serviceWorker';

import App from './App';

import './global.css';

if (!document.ie) {
  // check for ie
  const container = document.getElementById('root');

  const root = ReactDOM.createRoot(container);

  root.render(<App />);

  serviceWorker.register({
    onSuccess: () => getSWActions().handleSuccess(),
    onUpdate: (reg) => getSWActions().handleUpdate(reg)
  });
}
