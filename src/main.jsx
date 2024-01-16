import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} >
        <RootLayout />
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
