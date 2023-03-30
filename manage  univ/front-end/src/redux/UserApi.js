import React from 'react';
import  {createApi,fetchBaseQuery}from "@reduxjs/toolkit/query/react"

export  const usersApi = createApi({
    reducerPath:"usersApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000/"}),
    endpoints:(builder)=>({
        getAllusers:builder.query({  // it create custom hook auto
            // query:()=>"api/models",
            query:()=>"user",

        })
    })
    
})


export const{useGetAllusersQuery}=usersApi;
