import React,{useState,useEffect} from 'react'
import { signupUser } from '../../Redux/userAsyncThunk';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorComp from './ErrorComp';
const Signup = () => {
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.user)   
    const Auth=user.Authenticated
    const Error=user.error
    const navigate=useNavigate()


   const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    role:'USER'
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  useEffect(()=>{
    if(Auth)
     navigate('/products')
  },[Auth])

  useEffect(()=>{
    console.log(Error)
  },[Error])




  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(signupUser(formData))  
  };

  return (
    <>
    {Error? <ErrorComp error={Error} /> : null}
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
        
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          { 'Sign Up'}
        </button>


      </form>
    </div>
    </>
  );
}

export default Signup