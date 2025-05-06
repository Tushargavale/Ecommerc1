import React, { useEffect, useState } from 'react'
import { NavLink  } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { LoginUser,logoutUser } from '../../Redux/userAsyncThunk'
const NavBar = () => {
const dispacth=useDispatch()
  const user=useSelector((state)=>state.user)
  
  console.log(user)

  const Item=[
    {
      name:'About',
      value:'about',
      Auth:user.Authenticated
    },
    {
      name:'Home',
      value:'',
      Auth:user.Authenticated || true
    },
    {
      name:'Login',
      value:'login',
      Auth:!user.Authenticated
    },
    {
      name:'Products',
      value:'products',
      Auth:user.Authenticated
    },
    {
      name:'Add',
      value:'addproduct',
      Auth:user.Authenticated   && user.user.role=='ADMIN'
    },
    {
      name:'Cart',
      value:'shoppingcard',
      Auth:user.Authenticated
    },
    {
      name:'Signup',
      value:'signup',
      Auth:!user.Authenticated
    }
  ]

  const userOption=[
    {

    }
  ]





  const [show,setShow]=useState(false)



  return (
<>

<div className="w-full bg-black text-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center py-3">
       <div className="flex items-center space-x-4">
        
  <div className="text-lg font-bold"
  
  
  >MySite</div>
  <div
  className="relative inline-block"
  onMouseEnter={() => setShow(true)}
  onMouseLeave={() => setShow(false)}
>

  
  {/* Avatar */}
  {user.Authenticated && (
    <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer flex items-center justify-center text-sm font-medium text-black">
      {user?.user?.username?.charAt(0).toUpperCase()}
    </div>
  )}

  {/* Dropdown */}
  {show && (
    <div className="absolute left-0 mt-0 top-full w-40 bg-white border rounded-md shadow-lg z-10">
  <ul className="py-1 text-sm text-gray-700">
    <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
      Profile
    </NavLink>
    <NavLink to="/cart" className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
      Cart
    </NavLink>
   {user?.user?.role=='ADMIN'?<>
    <NavLink to="/assignrole" className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
     Assign Role 
    </NavLink>
   
   </>:null} 
    <NavLink to="/logout" className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
      Logout
    </NavLink>
  </ul>
</div>
  )}
</div>
</div>
      

      

      {/* Nav Links */}
      <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto  md:gap-6 mt-2 md:mt-0">
          {Item.map((item,index)=>{
            if(item.Auth)
              return  <NavLink key={index} className="block cursor-pointer px-4 py-2 focus:text-blue-500
             focus:text-bold text-center transition text-sm sm:text-base"
             to={item.value}             
             >{item.name}</NavLink>
          })}

          {user.Authenticated? <>
          <button onClick={()=>dispacth(logoutUser())} >Logout</button>
          </>:null}
  
      </div>
    </div>
  </div>
</div>
</>  
)
}

export default NavBar