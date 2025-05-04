import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import SuccessToast from './SuccessToast'
import { getCurrentUser } from '../../Redux/userAsyncThunk'
import { updateAvatar } from '../../Api/Api'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const navigate=useNavigate()
    const user=useSelector((state)=>state.user)
    const [success,setSuccess]=useState(false)
    
    const dispacth=useDispatch()
    const [userinfo,setUserinfo]=useState({
        username:user.user.username,
        email:user.user.email,
        avatar:user?.user?.avatar,
        avatarPreview:null
    })


    useEffect(()=>{
        setUserinfo({
        username:user.user.username,
        email:user.user.email,
        avatar:user?.user?.avatar,
        avatarPreview:null
        })
    },[user])
useEffect(()=>{
        if(success)
        {
           let time= setTimeout(() => {
                setSuccess(false)
                setUserinfo((prev)=>{
                    return {...userinfo,avatarPreview:null}
                })
                dispacth(getCurrentUser())

                clearTimeout(time)
            }, 2000);
        }
        console.log(user,userinfo)
    },[success,user])

   async function updateChanges(){
       try {
         const formdata=new FormData()
         formdata.append('avatar',userinfo.avatar)
         let resp=await updateAvatar(formdata)
            if(resp.status)
                setSuccess(true)
       } catch (error) {
        console.log(error)
       }
    }

    const fileInputRef=useRef()

    const triggerFileInput = () => {
    fileInputRef.current.click();  // Trigger the file input click event
  };


    function AddAvtarFun(event){
       const file = event.target.files[0]; 
       
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
       setUserinfo((prev)=>{
        return {...userinfo,avatar:file,avatarPreview:URL.createObjectURL(file)}
       })
        console.log(reader);  // Display the image as Base64, or upload it to the server
      };
      reader.readAsDataURL(file);  // Convert the file to Base64 (or use another method to upload)
    }
    }




  return (
   <>
    {success?<SuccessToast></SuccessToast>:null}
   <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Profile Settings</h2>

        {/* Avatar & Basic Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
         
                   <div className="relative w-24 h-24">
  {/* Avatar Circle */}
  { userinfo?.avatar ? (
    <img
      src={userinfo?.avatar?.url || userinfo.avatarPreview  } 
      alt="U"
      className="w-24 h-24 rounded-full object-cover"
    />
  ) : (
  null
  )}

  {/* Edit Icon Circle */}
  <div
    className="absolute bottom-1 right-1 w-7 h-7 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:bg-gray-100"
    title="Edit Profile Picture"
    onClick={triggerFileInput}
    
  >
    ✏️
    
  <input
        ref={fileInputRef}
        type="file"
        accept="image/*"  // Restrict to image files
        className="hidden"
        onChange={AddAvtarFun}  // Handle file change
      />


  </div>
</div>

          {/* Info Fields */}
          <div className="flex-1 w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={userinfo.username}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={userinfo.email}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button 
          onClick={()=>navigate('/changepass')}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition">
            Change Password
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition" onClick={updateChanges} >
            {userinfo.avatarPreview?'Save Avatar':'Change Avatar'}
          </button>
        </div>
      </div>
    </div>
   
   </>
  )
}

export default Profile