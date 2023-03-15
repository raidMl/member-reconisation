import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import usersSlice from "./ProductSlice";
import { usersApi } from "./UserApi";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";
const store = configureStore(
   {
      reducer: {
         users: usersSlice, //this is reducer
         cart: cartSlice,        //this is reducr
         auth: authSlice, // reducer

         //for Product api rtk query
         [usersApi.reducerPath]: usersApi.reducer,
      },
      middleware: (getDefaultMiddleware) => {
         return getDefaultMiddleware().concat(usersApi.middleware)
      }
   }
)
export default store