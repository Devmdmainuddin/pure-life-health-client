import React from 'react'
import ReactDOM from 'react-dom/client'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './layout/Layout';
import Login from './pages/Login'
import Register from './pages/Register'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './providers/AuthProvider'
import Dasbord from './pages/Dasbord'
import Details from './pages/Details'
import Chackout from './pages/Chackout'
import MyOrder from './pages/MyOrder'
 import PrivateRoute from './routes/PrivateRoute'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/cartItems",
      //   element: <Details></Details>,
      //   loader:()=>fetch("http://localhost:5000/cartItems")
      // },
      {
        path: "/cartItems/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader:({ params })=>fetch(`http://localhost:5000/cartItems/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dasbord",
        element:<Dasbord></Dasbord>,
      },
      {
        path: "/chackout/:id",
        element:<Chackout></Chackout>,
        loader:({ params })=>fetch(`http://localhost:5000/cartItem/${params.id}`)
      }, 
      {
        path: "/myOrder",
        element:<MyOrder></MyOrder>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1170px] mx-auto'>
    <React.StrictMode>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </React.StrictMode>
  </div>

)
