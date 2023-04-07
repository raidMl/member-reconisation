import React from 'react';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ['user'], //using for caching or invalidat

    endpoints: (builder) => ({
        getAllusers: builder.query({  // it create custom hook auto
            // query:()=>"api/models",
            query: () => "/user",
            providesTags: ['user']

        }),

        //for create
        addUser: builder.mutation({
            query: (user) => ({
                url: '/user',
                methode: "POST",
                body: user
            }),
            invalidatesTags: ['user']
        }),

        //for update
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/user/${user.id}`,
                method: "PATCH",
                body: user
            }), invalidatesTags: ['user']
        }),
        //for delete
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/user/${id}`,
                method: "DELETE",
                body: id
            }), invalidatesTags: ['user']

        })
    })

})


export const { useGetAllusersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = usersApi  