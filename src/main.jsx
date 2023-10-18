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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addProducts',
        element: <AddProducts></AddProducts>
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
