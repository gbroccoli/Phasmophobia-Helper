import React from 'react'
import ReactDOM from 'react-dom/client'


import "./index.css"


import Index from './pages/Index'
import App from "./pages/App/App"
import Layout from './pages/layout/layout'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: '/pages',
        element: <App />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
