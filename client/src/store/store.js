import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import adminLaptopSlice from "./laptop-slice";

const store = configureStore({
   reducer: {
      auth: authReducer,
      adminLaptops: adminLaptopSlice
    },
});


export default store;