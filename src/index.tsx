import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// import router, { altRouter } from './Router';
import { altRouter } from './Router';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EstructuraTheme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <EstructuraTheme>
      {/* <RouterProvider router={router} /> */}
      <RouterProvider router={altRouter} />
    </EstructuraTheme>
  </React.StrictMode>,
);

reportWebVitals();
