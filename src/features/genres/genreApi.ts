import { apiSlice } from "../api/apiSlice";

export const genreApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => `/genres?key=${import.meta.env.VITE_API_KEY}`,
    }),
  }),
});

export const { useGetGenresQuery } = genreApi;
