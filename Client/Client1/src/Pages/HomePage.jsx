import React,{useEffect, useState} from 'react'
import { logout } from '../../Api/Api'



const HomePage = () => {

useEffect(()=>{

 async function fun() {
    // await logout()
  }
  fun()
  
},[])



  return (
    <div>HomePage</div>
  )
}

export default HomePage