import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

// import router from './Router';
import './index.css';
import { store } from './redux/store';
import altRouter from './routes/Router';
import EstructuraTheme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <EstructuraTheme>
        {/* <RouterProvider router={router} /> */}
        <RouterProvider router={altRouter} />
      </EstructuraTheme>
    </Provider>
  </React.StrictMode>,
);
