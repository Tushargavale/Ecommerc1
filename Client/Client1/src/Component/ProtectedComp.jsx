import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const ProtectedComp = ({child}) => {
    const navigate=useNavigate()
    const [loder,setLoder]=useState(true)
    const Auth=useSelector((state)=>state.user.Authenticated)
    useEffect(()=>{
        if(Auth)
        {
            // console.log(Auth)
            // console.log('User is Authenticated Successfully')
            setLoder(false)
        }else{
            navigate('/login')
        }
    },[Auth])

  return (
  <>
  {loder?null:child}  
  </>
  )
}

export default ProtectedComp