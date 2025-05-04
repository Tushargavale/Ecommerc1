import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorComp from './ErrorComp'
import SuccessToast from './SuccessToast'
import { changePassword } from '../../Api/Api'
const ChangePass = () => {
  const navigate=useNavigate()
  const [form,setForm]=useState({
    newPassword:'',
    oldPassword:''
  })

  const [error,setError]=useState(null)
  const [success,setSuccess]=useState(false)

  useEffect(()=>{
    if(success)
    {
      let timer=setTimeout(() => {
        setSuccess(false)
        clearTimeout(timer)
        navigate('/profile')
      }, 2000);
    }
  },[success])

  function handleChange(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
async function handleSave() {
  try {
   const resp=await changePassword(form)
   console.log(resp.data.message)
   if(resp.status)
   {
    setSuccess(resp.data.message)
   }
  } catch (error) {
    console.log(error)
  setError(error.response.data.message || 'Password not changed ' )    
  }
}


  return (
    <>
    {error?<ErrorComp error={error} setError={setError} />:null}
    {success? <SuccessToast message={'Password Change Successfully'} /> :null}
    <div className="max-w-md mx-auto p-6 mt-32 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Old Password</label>
        <input
          type="oldPassword"
          name="oldPassword"
          value={form.oldPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter new password"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">New Password</label>
        <input
          type="newPassword"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Confirm password"
        />
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
      >
        Save
      </button>
    </div>
    
    </>
  )
}

export default ChangePass