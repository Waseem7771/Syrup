import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';
import { NavigationProvider } from './contexts/NavigationContext'; // Make sure this is imported
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <NavigationProvider> {/* Add this provider */}
          <App />
        </NavigationProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);