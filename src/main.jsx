import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Pages/Home/Home.jsx'
import AddProducts from './components/AddProducts/AddProducts.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import BrandProducts from './components/BrandProducts/BrandProducts.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import MyCart from './components/MyCart/MyCart.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import UpdateProduct from './components/UpdateProduct/UpdateProduct.jsx'
import Error from './components/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addProducts',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`https://brand-shop-assignment-server-side-3xu1ymexo.vercel.app/products/${params.id}`)
      },
      {
        path: '/brandProducts/:name',
        element: <BrandProducts></BrandProducts>,
        loader: () => fetch('../brand.json')
      },
      {
        path: '/productDetails/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-assignment-server-side-3xu1ymexo.vercel.app/products/${params.id}`)
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://brand-shop-assignment-server-side-3xu1ymexo.vercel.app/cart')
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/logIn',
        element: <LogIn></LogIn>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
