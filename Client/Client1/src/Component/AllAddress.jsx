import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import { addresses } from '../Constant'
import { getAllAddress } from '../../Api/Api'

const AllAddress = () => {
const navigate=useNavigate()
 

  const [address,setAddress]=useState([])
  useEffect(()=>{
    async function getAddress() {
      try {
        let resp=await getAllAddress()
        console.log(resp.data.addresses)
        setAddress(resp.data.addresses)
      } catch (error) {
        console.log(error)
      }
    }
    getAddress()
  },[])


  return (
<>
  {address.length > 0 && (
    <div className="flex flex-wrap justify-center  w-full gap-4 p-4">
      {address.map((item, key) => (
        <div
          key={key}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-md cursor-pointer rounded p-4 border  border-gray-200"
          onClick={()=>navigate(`/editaddress/${item._id}`)}
        >
          <h2 className="font-semibold text-lg mb-2">Address {key + 1}</h2>
          <p className="text-sm text-gray-700">{item.addressLine1}</p>
          <p className="text-sm text-gray-700">{item.addressLine2}</p>
          <p className="text-sm text-gray-700">
            {item.city}, {item.state}
          </p>
          <p className="text-sm text-gray-700">{item.pincode}</p>
          <p className="text-sm text-gray-700">{item.country}</p>
        </div>
      ))}
    </div>
  )}
</>

  )
}

export default AllAddress