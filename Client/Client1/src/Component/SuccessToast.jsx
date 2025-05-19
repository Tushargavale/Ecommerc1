import React, { useEffect, useState } from "react";

const SuccessToast = ({ message,setEffect=()=>{}}) => {


  useState(()=>{
    setTimeout(() => {
      setEffect(false)
    }, 2000);
  })

  return (
   <div className="fixed top-24 left-1/2 w-1/3 transform -translate-x-1/2 z-50">
      <div className="bg-green-700 text-white  px-6 py-4 rounded-md shadow-lg border border-green-900 font-semibold text-sm">
        {message || "File uploaded successfully!"}
      </div>
    </div>
  );
};

export default SuccessToast;
