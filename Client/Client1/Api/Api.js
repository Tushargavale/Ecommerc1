import axios from "axios";
import { Config } from "../src/Config";
import { axiosinstance } from "./Axios";


export const getAllProducts=async()=>{
    try {
     
    const response=await axiosinstance.get('/ecommerce/products')
        return response.data
    } catch (error) {
        console.log('Failed to fetch products:', error.message)
       throw new Error("unable to fetch data, try again")
    }
}


export const RegisterUser=async(formdata)=>{
    try {
        const user=await axiosinstance.post('/users/register',formdata) 
        console.log(user)
        if(user.status)
        {
            const logineduser= await LoginAPI(formdata)
            if(!logineduser)
                throw new Error('Something went wrong')
            return logineduser
        }else
        throw new Error('user is not register')
    } catch (error) {
        console.log(error)
        throw new Error(error.response?.data?.message || error  || 'Failed to register , please try again' )


    }
}

export const LoginAPI=async({email,password})=>{


   try {
       const {data} =await axiosinstance.post('/users/login',{email:email,password:password})
           
    
        if(!data)
            throw new Error('User Not Found') 
      //  console.log(user)
        return data.data.user
    } catch (error) {
        console.log(error.response.data.message)
        throw new Error( error.response?.data?.message || 'Failed to login. Please try again.')
    }
}




export const getCurrentUserAPI=async()=>{
    try {
        // let resp=await axios.get(`${Config.url}/users/current-user`,{withCredentials:true})
        let resp=await axiosinstance.get('/users/current-user')
        // console.log(resp.data)
        return resp.data.data
    } catch (error) {
  //      console.log(error)
        throw new Error('No current user is loged in')
    }
}


export const refreshTokenAPI=async()=>{
    try {
        let token=await axios.post(`${Config.url}/users/refresh-token`,{},{withCredentials:true,headers:{'Content-Type':'application/json'}})
        return token
    } catch (error) {
        console.log(error)
        throw new Error('Please Login again')
    }
}


export const logout=async()=>{
    try {
       let resp= await axios.post(`${Config.url}/users/logout`,{},{withCredentials:true})
       console.log('Logout Successfully..')
       console.log(resp)
    } catch (error) {
        console.log(error)
        return error
    }
}

export const updateAvatar=async(formdata)=>{
    try {
        let resp=await axiosinstance.patch('/users/avatar',formdata,{headers:{
            'Content-Type':'multipart/form-data'
        }})
        console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
        throw error
    }
}


export const changePassword=async(pass)=>{
    try {
        let resp=await axiosinstance.post('/users/change-password',pass)
        console.log(resp)
        if(!resp.status)
            throw new Error(resp?.message || 'Something Went Wrong')
        return resp
    } catch (error) {
        throw error
    }
}


export const AssignRoletouser=async({userId,role})=>{
    try {
        let resp=await axiosinstance.post(`/users/assign-role/${userId}`,{role})
        if(resp.status)
            return resp 
        throw new Error('Faild to assign Role')
    } catch (error) {
        console.log(error)
        throw error
    }
}



export const addAddress=async(addAddress)=>{
    try {
        let response=await axiosinstance.post(`/ecommerce/addresses`,addAddress)
        if(response.status)
            return response 
        throw new Error( 'Something Went Wrong.')
    } catch (error) {
        console.log(error)
        throw error
    }
}


export const getAllAddress=async()=>{
    try {
        let resp=await axiosinstance.get('/ecommerce/addresses')
        if(resp.status)
            return resp.data 
        throw new Error('Error in finding address')

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getAddressById=async(addressId)=>{
    try {
        let response=await axiosinstance.get(`/ecommerce/addresses/${addressId}`)
        console.log(response)
        if(response.status)
            return response 
        else throw new Error('unknown Error')
    } catch (error) {
        console.log(error)
        throw error
    }
}



export const deleteAddress=async(addressId)=>{
    try {
        let res=await axiosinstance.delete(`/ecommerce/addresses/${addressId}`)
        if(res.status)
            return res
        else
         throw new Error('Not Deleted')
    } catch (error) {
        console.log(error)
        throw error
    }
}



export const updateAddress=async(addressId,address)=>{
    try {
        let resp=await axiosinstance.patch(`/ecommerce/addresses/${addressId}`,address)
        if(resp.status)
            return resp
        else
        throw new Error('Updation Failed')
    } catch (error) {
        console.log(error)
        throw error
    }
}

