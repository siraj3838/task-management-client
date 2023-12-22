import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyRouter from './Router/MyRouter.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={MyRouter}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
