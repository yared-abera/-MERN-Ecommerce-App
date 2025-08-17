import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
        laptops: [],
        isLoading: false,
        error: null
    };
    

    export const AddNewLaptop = createAsyncThunk(
        'laptops/addNewLaptop', async (form, { rejectWithValue }) => { 
           try
           { 
            const response= await axios.post('http://localhost:5000/api/admin/product/add-new-laptop', form);

                return response.data;
                
        }
        catch(error){
            return rejectWithValue(error.response?.data);
        }
        }
    
    ); 
    
    

    export const FetchAllLaptops= createAsyncThunk(
        
    'laptops/FetchAllLaptops', async (_, { rejectWithValue }) => { 
            try
            { 
                const response= await axios.get('http://localhost:5000/api/admin/product/get-all-laptops');
    
                    return response;
                    
            }
            catch(error){
                return rejectWithValue(error.response?.data);
            }
            }



    );


    
    
    



       
    const laptopSlice = createSlice({
        name: "laptops",
        initialState,
        reducers: {
            setState: (state, action) => {  

            },
        },
        extraReducers: (builder) => {
            builder.addCase( AddNewLaptop.fulfilled, (state, action) => {
                state.laptops = action.payload;
                state.isLoading = false;
                state.error = null;
            });
            builder.addCase(AddNewLaptop.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            });
            builder.addCase(AddNewLaptop.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            }).addCase(FetchAllLaptops.fulfilled, (state, action) => {

                console.log("action.payload.data form FetchAllLaptops", action.payload.data);
                state.laptops = action.payload.data;
                state.isLoading = false;
                state.error = null;
            }).addCase(FetchAllLaptops.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            }).addCase(FetchAllLaptops.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
        },
    });

    export const { setState } = laptopSlice.actions;
    export default laptopSlice.reducer;