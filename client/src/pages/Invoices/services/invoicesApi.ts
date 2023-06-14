import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const invoicesApi = createApi({
    reducerPath: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        credentials: 'include',
    }),
    tagTypes:['Invoices'],
    endpoints: (builder) => ({
        invoices: builder.query<... , void>({
            query: () => '/invoices',
            providesTags: ['Invoices'],
        }),
    })
})

export const {
    useInvoicesQuery
} = invoicesApi;