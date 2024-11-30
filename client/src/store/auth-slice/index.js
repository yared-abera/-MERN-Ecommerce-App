import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  axios from "axios";

const initialState = {
     isAuthenticated: false,
     isLoading: false,
     user: null,
};


export const registerUser = createAsyncThunk(
     "auth/register",
     async (formData) => {
       const response= await axios.post('http://localhost:5000/api/auth/register',
        formData,
        {
            withCredentials: true,
        }

       );
       return response.data;
         
     }
)

const authSlice = createSlice({
     name: "auth",
     initialState,
     reducer: {
         setUser: (state, action) => {
             
         },
     
     extraReducers: (builder) => {
         builder.addCase(registerUser.pending, (state) => {
             state.isLoading = true;
         }).addCase(registerUser.fulfilled, (state, action) => {
             state.isLoading = false;
             state.isAuthenticated = true;
             state.user = action.payload;
         })

     }

        
     }
    
    }

);

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

