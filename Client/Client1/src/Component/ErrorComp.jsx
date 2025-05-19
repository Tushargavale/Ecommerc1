import React from 'react'
import { clearError } from '../../Redux/userSlice';
import { useDispatch } from 'react-redux';
const ErrorComp = ({ error ,setError }) => {
  const dispatch=useDispatch()
  if (!error) return null;

  return (
    <>
    
    <div className="fixed top-4 mt-16 left-1/2 w-1/3  transform -translate-x-1/2 bg-red-500 border text-white border-red-500 px-4 py-3 rounded max-w-md z-50 shadow-lg">
  <button
    className="absolute top-1 right-2 text-white font-bold text-xl leading-none focus:outline-none"
    aria-label="Close"
    onClick={() => {
      if (!setError) dispatch(clearError());
      else setError("");
    }}
  >
    &times;
  </button>
  <strong className="font-bold">Error: </strong>
  <span className="block sm:inline">{error}</span>
</div>
    
    </>
  );
};

export default ErrorComp;