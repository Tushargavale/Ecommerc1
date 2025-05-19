import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Profile = () => {
  const user=useSelector((state)=>state.user)
  const userBasicField = {
    userName: user?.user?.username || "",
    email: user?.user?.email || "",
    avatar: user?.user?.avatar || '',
    role: user?.user?.role || 'USER',
  };

  const userprofile = {
    firstName: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
  };

  const userAddress = {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: null,
    coutry: "",
  };

  const [editable, setEditable] = useState(false);
  const [userinfo, setUserinfo] = useState(userprofile);
  const [address, setAddress] = useState(userAddress);
  const [userBasicinfo, setUserBasicinfo] = useState(userBasicField);


  useEffect(()=>{
    console.log(userinfo)
  },[userinfo,editable])

  const userinfoHandler=(e)=>{
    const {name,value}=e.target 
    let temp={...userinfo}
    temp={...temp,[name]:value}
    setUserinfo(temp)
  }

  return (
    <>
    <div className="flex  justify-center space-x-4 px-4 py-14">

       
       <div className="max-w-3xl mx-auto mt-10 p-6 border border-blue-500 rounded-lg shadow-md bg-white w-4/6">
  {/* Fixed Basic Info */}
  <div className="border border-black p-4 rounded-lg mb-6">
    <h2 className="text-lg font-semibold mb-4">Basic Information (Fixed)</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label className="font-medium">Username</label>
        <input
          className="border border-gray-300 p-2 rounded"
          type="text"
          value={userBasicField.userName}
          disabled
        />
      </div>
      <div className="flex flex-col">
        <label className="font-medium">Email</label>
        <input
          className="border border-gray-300 p-2 rounded"
          type="text"
          value={userBasicField.email}
          disabled
        />
      </div>
      <div className="flex flex-col">
        <label className="font-medium">Role</label>
        <input
          className="border border-gray-300 p-2 rounded"
          type="text"
          value={userBasicField.role}
          disabled
        />
      </div>
    </div>
  </div>

  {/* Editable Fields */}
  <div className="border border-black p-4 rounded-lg">
    <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* First Name */}
      <div className="flex flex-col">
        <label className="font-medium">First Name</label>
        <input
          className="border border-gray-300 p-2 rounded"
          type="text"
          name="firstName"
          onChange={userinfoHandler}
          value={userinfo.firstName}
          disabled={editable}
        />
      </div>

      {/* Last Name */}
      <div className="flex flex-col">
        <label className="font-medium">Last Name</label>
        <input
          className="border border-gray-300 p-2 rounded"
          type="text"
          name="lastName"
          onChange={userinfoHandler}
          value={userinfo.lastName}
          disabled={editable}
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col col-span-1 md:col-span-2">
        <label className="font-medium">Phone Number</label>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-20 p-2 border border-gray-300 rounded text-center"
            placeholder="+91"
            name="countryCode"
            onChange={userinfoHandler}
            value={userinfo.countryCode}
            disabled={editable}
          />
          <input
            type="text"
            name="phoneNumber"
            onChange={userinfoHandler}
            className="flex-1 p-2 border border-gray-300 rounded"
            placeholder="9876543210"
            value={userinfo.phoneNumber}
            disabled={editable}
          />
        </div>
      </div>

      {/* Gender */}
      <div className="flex flex-col">
        <label className="font-medium">Gender</label>
        <select
          disabled={editable}
          name="gender"
          onChange={userinfoHandler}
          value={userinfo.gender}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Date of Birth */}
      <div className="flex flex-col">
        <label className="font-medium">Date of Birth</label>
        <input
          className="border border-gray-300 p-2 rounded"
          type="date"
          name="dateOfBirth"
          onChange={userinfoHandler}
          value={userinfo.dateOfBirth}
          disabled={editable}
        />
      </div>
    </div>
    <div className="mt-5" >
      <button
      onClick={()=>setEditable(!editable)}
      className={`border border-black w-full p-2 text-white ${editable?'bg-green-700':'bg-blue-600'}  rounded-md hover:bg-green`}
      >{editable?'Edit':'Submit'}</button>
    </div>
  </div>
  </div>

<div className="flex border w-1/5 h-44 border-blue-700 p-5 underline rounded-md  flex-col bg-gray-100 mt-10">
        <NavLink
        className='text-blue-600'
        >User</NavLink> 

        <NavLink to={'/changepass'}
        className='text-blue-600'
        >Change Password </NavLink>

        <NavLink to={'/addnewadd'}
        className='text-blue-600'
        >Add New Address</NavLink>


        <NavLink to={'/alladdress'} 
        className='text-blue-600'
        >View All Address </NavLink>
</div>


    </div>

    </>
  );
};

export default Profile;
