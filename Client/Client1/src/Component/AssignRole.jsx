import React,{useState,useEffect} from 'react'
import ErrorComp from './ErrorComp';
import SuccessToast from './SuccessToast';
import { data, useNavigate } from 'react-router-dom';
import { AssignRoletouser } from '../../Api/Api';
const AssignRole = () => {
    const navigate=useNavigate()
const [userId, setUserId] = useState('');
  const [role, setRole] = useState('USER');
  const [error,setError]=useState('')
  const [success,setSuccess]=useState(false)
  const handleSubmit = async(e) => {
    e.preventDefault();
   try {
    let resp=await AssignRoletouser({userId,role})
    if(resp.status)
        setSuccess(true)
    
   } catch (error) {
    setError(error?.response?.data.message || 'Request Failed to assign role' )
   }
   
  };

useEffect(()=>{
    if(success)
    {
       let timer= setTimeout(() => {
            setSuccess(false)
            navigate('/')
            clearTimeout(timer)
        }, 2000);
    }
},[success])




  return (
    <>
    {error?<ErrorComp error={error} setError={setError} />:null}
    {success?<SuccessToast message={'Role Assigned Successfully'} />:null}
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Assign Role</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
            User ID
          </label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter User ID"
            required
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Assign Role
        </button>
      </form>
    </div> 
    </>
  )
}

export default AssignRole