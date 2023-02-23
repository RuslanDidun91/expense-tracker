import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'http://localhost:8000';

export const apiSlice = createApi({
  //function making request to the server
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: builder => ({
    getCategories: builder.query({
      //GET: 'http://localhost:8000/api/categories/'
      query: () => 'api/categories'
    })
  })
})

export default apiSlice;