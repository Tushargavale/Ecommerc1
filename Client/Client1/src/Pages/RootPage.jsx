import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container'
import NavBar from "../Component/NavBar"
import Footer from "../Component/Footer" 
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrentUser ,LoginUser} from '../../Redux/userAsyncThunk'

const RootPage = () => {
  const dispatch=useDispatch()
  const [loder,setLoder]=useState(false)
  

  useEffect(()=>{
    dispatch(getCurrentUser()).then(()=>{
      console.log('Loding is completed...')
      setLoder(true)
    })
  },[])


  return (
 <>
 {loder?
 <div className="flex flex-col bg-blue-50 w-full">
          <NavBar></NavBar>
    
    <main className="flex-1 overflow-auto">
    <Container>
      <Outlet />
    </Container>
  </main> 


    <div className=' w-full' >
      <Footer></Footer>
    </div>
    
  
    </div>:<h1>Loading</h1>}
 </>
  )
}

export default RootPage