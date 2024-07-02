import { apiSlice } from "../api/apiSlice";

export const storeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStore: builder.query({
      query: ({ page = 1, pageSize = 6 }) =>
        `/stores?key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}&page_size=${pageSize}`,
    }),
  }),
});

export const { useGetStoreQuery } = storeApi;
