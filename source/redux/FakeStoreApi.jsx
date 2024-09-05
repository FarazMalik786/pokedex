import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fakestoreApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    reducerPath: "fakestoreApi",
    tagTypes: ['StoreProducts', "products"],
    endpoints: (builder) => ({
        getAllProducts : builder.query({
            query: () => '/products',
            providesTags:["products"]
        }),
        addProduct : builder.mutation({
            query: (product) => ({
                url: "/products",
                method:"POST",
                body: product
            }),
            invalidatesTags:["products"]
        })
    })
})

export const { useGetAllProductsQuery , useAddProductMutation } = fakestoreApi