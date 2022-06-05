import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token

   
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
}),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      method: 'GET',
      url: '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
        query: contactContent  => ({
            url:`/contacts`,
            method: 'POST',
        body: {
            name: contactContent.name,
            number: contactContent.phone,
            }
        }),
        invalidatesTags:['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactApi;