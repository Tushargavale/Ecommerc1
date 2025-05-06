import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const ProtectedComp = ({child ,permision='USER'  }) => {
    const navigate=useNavigate()
    const [loder,setLoder]=useState(true)
    const [userpermision,setuserPermision]=useState(false)

    const user=useSelector((state)=>state.user)
    const Auth=user.Authenticated
    useEffect(()=>{
        if(user?.user?.role==permision)
            setuserPermision(true)
        else
        if(user?.user?.role=='ADMIN')
            setuserPermision(true)
    },[])
    useEffect(()=>{
         if(Auth)
        {
            if(permision==user?.user?.role)
                setLoder(false)
            else 
            if(user?.user?.role=='ADMIN')
                setLoder(false)
            else
            navigate('/')
        }else
        navigate('/login')




        
    },[Auth])

  return (
  <>
  {loder?null:child}  
  </>
  )
}

export default ProtectedComp