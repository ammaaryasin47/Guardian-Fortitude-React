import "leaflet/dist/leaflet.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app';
import { LoadingProvider } from './pages/LoadingContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoadingProvider>
  </React.StrictMode>
);