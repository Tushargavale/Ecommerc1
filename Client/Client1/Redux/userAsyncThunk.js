import {createAsyncThunk} from '@reduxjs/toolkit'
import {LoginAPI,RegisterUser,getCurrentUserAPI,logout,refreshTokenAPI} from '../Api/Api'



export const LoginUser=createAsyncThunk('currentUser/login',async({email,password},{rejectWithValue})=>{
    try {
        console.log(email,password)
        const user=await LoginAPI({email,password})
        if(!user)
          return rejectWithValue('Login Failed')
        return user
    } catch (error) {
        console.log(error.message)
        return rejectWithValue(error.message || "unknown error occur")
    }
})


export const getCurrentUser=createAsyncThunk('currentUser/getCurrentuser',async(_,{rejectWithValue})=>{
    try {
                 //  await refreshTokenAPI()
        const user=await getCurrentUserAPI()
        if(!user)
        {
           return rejectWithValue('user not found , please login again')
        }
      return user
    } catch (error) {
     //   console.log(error)
       return rejectWithValue(error)
    }
}) 



export const logoutUser=createAsyncThunk('currentUser/logoutuser',async(_,{rejectWithValue})=>{
    try {
        let resp=await logout()
        console.log(resp)
        return resp
    } catch (error) {
        return rejectWithValue(error)
    }
})



export const signupUser=createAsyncThunk('currentuser/signup',async(formdata,{rejectWithValue})=>{
    try {
        const user=await RegisterUser(formdata)
        if(!user)
            return rejectWithValue('Something went wrong')

        return user
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.message || 'Registartion Error' )
    }
})















