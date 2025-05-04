import React, { useEffect } from "react";

const SuccessToast = ({ message}) => {


  return (
   <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-green-700 text-white px-6 py-3 rounded-md shadow-lg border border-green-900 font-semibold text-sm">
        {message || "File uploaded successfully!"}
      </div>
    </div>
  );
};

export default SuccessToast;
