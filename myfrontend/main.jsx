// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './src/Router'; // Assuming you have set up a Router.jsx
import './index.css';

// Create a root container to render your app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);