import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminDashboard from './Pages/AdminDashboard.jsx'
import ServiceDetails from './Pages/ServiceDetails.jsx'
import Auth from './Pages/Auth.jsx'
import CustomerDashboard from './Pages/CustomerDashboard.jsx'
import Home from './Pages/Home.jsx'
import ProviderDashboard from './Pages/ProviderDashboard.jsx'
import Booking from './Pages/Booking.jsx'
import NewServices from './Pages/New-Services.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'


const routerVariables = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
        {
            path: '/admin-dashboard',
            element: <AdminDashboard/>,
        },
        {
            path: '/auth',
            element: <Auth/>,
        },
        {
            path: '/booking/:bookingId',
            element: <Booking/>,
        },
        {
            path: '/customer-dashboard',
            element: <CustomerDashboard/>,
        },
        {
            path: '/home',
            element: <Home/>,
        },
        {
            path: '/provider-dashboard',
            element: <ProviderDashboard/>,
        },
        {
            path: '/service-details',
            element: <ServiceDetails/>,
        },
    
        {
            path: '/NewServices',
            element: <PrivateRoute><NewServices/></PrivateRoute>,
        },
        {
            path: '*',
            element: <h1>Page Not Found</h1>,
        }
    ]
}]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerVariables}></RouterProvider>
  </React.StrictMode>,
)
