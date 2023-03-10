import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8000';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: builder => ({
    getCategories: builder.query({
      // GET: 'http://localhost:8000/api/categories'
      query: () => '/api/categories',
      providesTags: ['categories']
    }),

    getLabels: builder.query({
      // GET: 'http://localhost:8000/api/labels'
      query: () => '/api/labels',
      providesTags: ['transaction']
    }),

    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        // POST: 'http://localhost:8000/api/transaction'
        url: '/api/transaction',
        method: "POST",
        body: initialTransaction
      }),
      invalidatesTags: ['transaction']
    }),

    deleteTransaction: builder.mutation({
      query: recordId => ({
        // DELETE: 'http://localhost:8000/api/transaction'
        url: '/api/transaction',
        method: "DELETE",
        body: recordId
      }),
      invalidatesTags: ['transaction']
    })
  })
})

export default apiSlice;