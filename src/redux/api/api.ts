import { axiosBaseQuery } from '@/lib/axiosBaseQuery'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseUrl = "https://bug-buster-pro-backend.vercel.app/api/v1"
// Define a service using a base URL and expected endpoints
export const bugBusterProApi = createApi({
    reducerPath: 'bugBusterProApi',
    baseQuery: axiosBaseQuery({ baseUrl }),
    endpoints: (build) => ({

    }),
    tagTypes: ['faq', 'role', "service", "stats", "blog", "cart", "contact", "order", "review", 'user', "blogTags"]
})