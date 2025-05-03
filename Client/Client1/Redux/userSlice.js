import { createSlice} from '@reduxjs/toolkit'
import { LoginUser,getCurrentUser,logoutUser,signupUser } from './userAsyncThunk'

const InitialState={
    user:{},
    Authenticated:false,    
    error:null
}



 const userSlice=createSlice({
    initialState:InitialState,
    name:'currentUser',
    reducers:{
        getusr:(state)=>{console.log(state)},
        clearError:(state)=>{state.error=null }  
    },
    extraReducers:(builder)=>{
        builder.addCase(LoginUser.fulfilled,(state,action)=>{
            console.log(action)
            state.user=action.payload 
            state.Authenticated=true;
            state.error=null
        }),
        builder.addCase(LoginUser.pending,(state,action)=>{

        }),
        builder.addCase(LoginUser.rejected,(state,action)=>{
            console.log(action.payload)
            state.user={},
            state.Authenticated=false,
            state.error=action.payload
        }),
        builder.addCase(getCurrentUser.fulfilled,(state,action)=>{
            console.log(action)
            state.error=null 
            state.Authenticated=true,
            state.user=action.payload
        }),
        builder.addCase(getCurrentUser.rejected,(state,action)=>{
      //      console.log(action)
            state.Authenticated=false,
            state.error=null,
            state.user={}
        })
        builder.addCase(logoutUser.fulfilled,(state,action)=>{
            state.Authenticated=false
            state.error=null
            state.user={}
        })
        builder.addCase(signupUser.fulfilled,(state,action)=>{
            state.error=null 
            state.Authenticated=true,
            state.user=action.payload
        })
        builder.addCase(signupUser.pending,(state,action)=>{

        }),
        builder.addCase(signupUser.rejected,(state,action)=>{
            state.user={},
            state.Authenticated=false,
            state.error=action.payload
        })
    }
})






export const {getusr,clearError} =userSlice.actions
export default userSlice.reducer