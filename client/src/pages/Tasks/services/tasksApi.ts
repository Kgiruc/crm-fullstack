import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Task } from '../../../models/task';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    tasks: builder.query<Task[], void>({
      query: () => '/tasks',
      providesTags: ['Tasks'],
    }),
    addTask: builder.mutation<void, Task>({
      query: (task) => ({
        url: '/tasks',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: builder.mutation<void, Task>({
      query: ({ id, ...rest }) => ({
        url: `tasks/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation<void, string>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
