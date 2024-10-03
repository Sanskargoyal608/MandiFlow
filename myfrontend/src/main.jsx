import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router';
import './index.css'; // Global CSS

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
