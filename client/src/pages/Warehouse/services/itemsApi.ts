import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WarehouseItem } from '../../../models/warehouseItem';

export const warehouseApi = createApi({
  reducerPath: 'warehouseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['WareHouse'],
  endpoints: (builder) => ({
    warehouseItems: builder.query<WarehouseItem[], void>({
      query: () => '/warehouse',
      providesTags: ['WareHouse'],
    }),
  }),
});

export const { useWarehouseItemsQuery } = warehouseApi;
