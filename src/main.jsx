import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Fix for GitHub Pages routing
// If we're on GitHub Pages and the URL has the ?/ prefix, clean it up
if (window.location.search.includes('?/')) {
  const path = window.location.search.replace('?/', '').split('&')[0].replace(/~and~/g, '&');
  const base = '/DocStep';
  const newPath = base + path + window.location.hash;
  window.history.replaceState({}, '', newPath);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/DocStep">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

