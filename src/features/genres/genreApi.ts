import { apiSlice } from "../api/apiSlice";

export const genreApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => `/genres?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getPaginatedGenres: builder.query({
      query: ({ page = 1, pageSize = 4 }) =>
        `/genres?key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}&page_size=${pageSize}`,
    }),
  }),
});

export const { useGetGenresQuery, useGetPaginatedGenresQuery } = genreApi;
