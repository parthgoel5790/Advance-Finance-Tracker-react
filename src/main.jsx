import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FinanceProvider } from './context/financeContext';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <FinanceProvider>
    <App />
  </FinanceProvider>
);
