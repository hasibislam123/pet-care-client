import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router';
import router from './Route/RouterProvider.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

// Simple render without complex error handling
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  );
} else {
  console.error('Failed to find the root element');
}