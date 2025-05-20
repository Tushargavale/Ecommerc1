import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {addresses} from '../Constant'
import SuccessToast from './SuccessToast'
import ErrorComp from './ErrorComp'
import { useNavigate } from 'react-router-dom'
import { deleteAddress, getAddressById, updateAddress } from '../../Api/Api'
const EditAddress = () => {
    const navigate=useNavigate()
    const [error,setError]=useState('')
    const [success,setSuccess]=useState(false)
    const [message,setMessage]=useState('')
    const {id}=useParams()
   
    useEffect(()=>{
      async function getAdd() {
        let result=await getAddressById(id)
        console.log(result.data.data)
        setUpdate(result.data.data)
      }

      if(id)
        getAdd()        
    },[id])



    useEffect(()=>{
      if(success)
      {
        setTimeout(() => {
          navigate('/products')
        }, 2000);
      }
    },[success])
   const [update,setUpdate]=useState({})

    const Handler=(e)=>{
        const {name,value}=e.target 
        let temp={...update}
        temp={...temp,[name]:value}
        setUpdate(temp)
    }

   




    const onsubmit=async()=>{
       try {
        let resp=await updateAddress(id,update)
        console.log(resp)
        setSuccess(true)
        setMessage('Address Updated Successfully')
       } catch (error) {
        console.log(error.response.data.message)
        setError(error.response.data.message)
       }       
    }


    const ondelete=async()=>{
      try {
        let resp=await deleteAddress(id)
        if(resp.status)
        {
          setSuccess(true)
          setMessage('Address Deleted Successfully')
        }
        else
        throw new Error('Not Deleted Successfully')
      } catch (error) {
        setError(error.response.data.message || 'Address Not Deleted Successfully'||error )
      }
    }






  return (
   <>
   {error && <ErrorComp error={error}  setError={setError}  /> }
    {success&& <SuccessToast message={message} setEffect={setSuccess}/>}
    {update &&  <div className="flex mx-auto p-6 w-1/2 mt-32 bg-white rounded-md shadow-md">

                <div className="flex flex-col w-full mt-3 border p-4 rounded-md border-black gap-2">
     <div className="flex flex-col" >
      <label
      className="font-medium"
      >AddressLine 1</label>
      <input type="text"
      name='addressLine1'
      value={update.addressLine1}
      onChange={Handler}
      className="border p-2 rounded border-gray-300 mt-1 "
      />
     </div>

      <div className="flex flex-col" >
      <label
      className="font-medium"
      >AddressLine 2</label>
      <input type="text"
      name='addressLine2'
      value={update.addressLine2}
      onChange={Handler}
      className="border p-2 rounded border-gray-300 mt-1 "
      />
     </div>

      <div className="flex flex-row w-full gap-2">

         <div className="flex flex-col w-1/2 ">
          <label
          className="font-medium"
          >Country</label>
          <input type="text"
          value={update.country}
          onChange={Handler}
          name='country'
          className="border p-2 rounded  "
          />
     </div>

      <div className="flex flex-col w-1/2">
          <label
          className="font-medium"
          >State</label>
          <input type="text"
          name='state'
          onChange={Handler}
          value={update.state}
          className="border p-2 rounded  "
          />
     </div>

      </div>

    {/* City and Pincode */}

       <div className="flex flex-row w-full  gap-2">

         <div className="flex flex-col w-1/2 ">
          <label
          className="font-medium"
          >City</label>
          <input type="text"
          name='city'
          onChange={Handler}
          value={update.city}
          className="border p-2 rounded  "
          />
     </div>

      <div className="flex flex-col w-1/2">
          <label
          className="font-medium"
          >Pincode</label>
          <input type="number"
          name='pincode'
          value={update.pincode}
          onChange={Handler}
          className="border p-2 rounded   "
          />
     </div>

  
      </div>


       <button
     className='border p-2 rounded-md  bg-green-600 text-white font-medium hover:bg-green-700'
     onClick={onsubmit}
     >Update</button>

     <button
     className='border p-2 rounded-md  bg-red-600 text-white font-medium hover:bg-red-700'
     onClick={ondelete}
     >Delete</button>

  </div>

  
  





    </div>    
    }
   </>
  )
}

export default EditAddress