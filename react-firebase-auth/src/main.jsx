import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Layout/Root.jsx';
import Home from './Component/Home.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx';
import Orders from './Component/Orders/Orders.jsx';
import Profile from './Component/Profile/Profile.jsx';
import PrivateRaoute from './Raouts/PrivateRaoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/orders',
        element: <PrivateRaoute><Orders></Orders></PrivateRaoute>
      },
      {
        path: '/profile',
        element: <PrivateRaoute><Profile></Profile></PrivateRaoute>
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
