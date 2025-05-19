import React, { useState } from 'react'
import SuccessToast from './SuccessToast'
import ErrorComp from './ErrorComp'
import { useLocation } from 'react-router-dom'
const AddNewAddress = (props) => {
   
    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)
    const [address,setAddress]=useState({
        addressLine1:props?.addressLine1 ||'',
        addressLine2:props?.addressLine2||'',
        city:props?.city||'',
        state:props.state||'',
        pincode:props?.pincode||null,
        country:props?.country||''
    })


    const Handler=(e)=>{
        let temp={...address}
        const {name,value}=e.target
        temp={...temp,[name]:value}
        setAddress(temp)
    }

    
    const onsubmit=()=>{
       setTimeout(() => {
        // setSuccess(true)
        setError(true)
       }, 500);
    }   



  return (
    <>
    {success && <SuccessToast setEffect={setSuccess} message={'Address Added Successfully'} />}
    {error&&<ErrorComp error={'System Error: Please Try Again'} setError={setError} />}
        <div className="flex mx-auto p-6 w-1/2 mt-32 bg-white rounded-md shadow-md">

                <div className="flex flex-col w-full mt-3 border p-4 rounded-md border-black gap-2">
     <div className="flex flex-col" >
      <label
      className="font-medium"
      >AddressLine 1</label>
      <input type="text"
      name='addressLine1'
      value={address.addressLine1}
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
      value={address.addressLine2}
      onChange={Handler}
      className="border p-2 rounded border-gray-300 mt-1 "
      />
     </div>

      <div className="flex flex-row  gap-2">

         <div className="flex flex-col w-full ">
          <label
          className="font-medium"
          >Country</label>
          <input type="text"
          value={address.country}
          onChange={Handler}
          name='country'
          className="border p-2 rounded  "
          />
     </div>

      <div className="flex flex-col w-full">
          <label
          className="font-medium"
          >State</label>
          <input type="text"
          name='state'
          onChange={Handler}
          value={address.state}
          className="border p-2 rounded  "
          />
     </div>

      </div>

    {/* City and Pincode */}

       <div className="flex flex-row  gap-2">

         <div className="flex flex-col w-full ">
          <label
          className="font-medium"
          >City</label>
          <input type="text"
          name='city'
          onChange={Handler}
          value={address.city}
          className="border p-2 rounded  "
          />
     </div>

      <div className="flex flex-col w-full">
          <label
          className="font-medium"
          >Pincode</label>
          <input type="number"
          name='pincode'
          value={address.pincode}
          onChange={Handler}
          className="border p-2 rounded   "
          />
     </div>

  
      </div>


       <button
     className='border p-2 rounded-md  bg-green-600 text-white font-medium hover:bg-green-700'
     onClick={onsubmit}
     >Submit</button>

  </div>
  





    </div>
    
    
    </>
  )
}

export default AddNewAddress