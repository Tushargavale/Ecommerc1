import { useState } from 'react'
//import NavBar from './Component/NavBar'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { RouteConfig } from './Routing/RoutingConfig'
import { RegisterUser } from '../Api/Api'
function App() {
  


  return (
    <>
   <RouterProvider router={RouteConfig} >
      
    </RouterProvider>

    
    </>
  )
}

export default App
