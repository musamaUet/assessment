import App from './src/App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store.ts';
import { PersistGate } from "redux-persist/integration/react";

import './assets/styles/app.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <App />
            <Toaster />
          </Router>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);