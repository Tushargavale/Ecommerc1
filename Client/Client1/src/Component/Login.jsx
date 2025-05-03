import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { LoginUser } from '../../Redux/userAsyncThunk';
import { useNavigate } from 'react-router-dom';
import { clearError } from '../../Redux/userSlice';
import ErrorComp from './ErrorComp';
function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser({email,password}))
  };

  const user=useSelector((state)=>state.user)   
  const Auth=user.Authenticated
  const Error=user.error

  useEffect(()=>{
    if(Auth)
    {
      navigate('/products')
    }

    return ()=>dispatch(clearError())
  },[Auth])


  return (
    <>
    {Error? <ErrorComp error={Error} ></ErrorComp>:null}
     <div className="min-h-[600px] bg-blue-50 flex justify-center items-center p-2">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>

    </>
  );
}

export default Login;
