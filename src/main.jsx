import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Industries from './pages/Industries'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import './index.css'
import Contact from './pages/Contact'
import AdvancedEcommerce from "./pages/AdvancedEcommerce";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/industries", element: <Industries /> },
      { path: "/services", element: <Services /> },
      { path: "/solutions", element: <Solutions /> },
      { path: "/contact", element: <Contact /> }, 
      {path: "/advanced-ecommerce", element:<AdvancedEcommerce />},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
)
