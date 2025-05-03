import React from 'react'
import { clearError } from '../../Redux/userSlice';
import { useDispatch } from 'react-redux';
const ErrorComp = ({ error }) => {
  const dispatch=useDispatch()
  if (!error) return null;

  return (
    <>
    
     <div className="relative bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto mt-4">
      <button
        className="absolute top-1 right-2 text-red-700 font-bold text-xl leading-none focus:outline-none"
        aria-label="Close"
        onClick={()=>dispatch(clearError())}
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