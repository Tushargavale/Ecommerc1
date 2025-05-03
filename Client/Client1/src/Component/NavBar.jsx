import React from 'react'
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



  return (
<>

<div className="w-full bg-black text-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center py-3">
      {/* Logo or Site Title */}
      <div className="text-lg font-bold">MySite</div>

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