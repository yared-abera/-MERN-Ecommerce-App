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

 export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);  
    }
  }
);

      
     

const authSlice = createSlice({
     name: "auth",
     initialState,
     reducers: {
         setUser: (state, action) => {
             
         },
     
     extraReducers: (builder) => {
         builder.addCase(registerUser.pending, (state) => {
             state.isLoading = true;
         }).addCase(registerUser.fulfilled, (state, action) => {
             state.isLoading = false;
             state.isAuthenticated = false;
             state.user = action.payload;
         }).addCase(registerUser.rejected, (state) => {
             state.isLoading = false;
             state.isAuthenticated = false; 
             state.user = null;
         }).addCase(loginUser.pending, (state) => {
             state.isLoading = true;
         }).addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            }).addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            } );

     }

        
     }
    
    }

);

export const {setUser} = authSlice.actions;

export default authSlice.reducer;

