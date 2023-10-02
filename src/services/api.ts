import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Prato } from '../pages/Trattoria'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedFood: builder.query<Prato, void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFeaturedFoodQuery } = api

export default api
