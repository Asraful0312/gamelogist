import { apiSlice } from "../api/apiSlice";

export const searchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchGamesByName: builder.query({
      query: (name) =>
        `/games?search=${name}&key=${import.meta.env.VITE_API_KEY}`,
    }),
  }),
});

export const {
  useSearchGamesByNameQuery
} = searchApi;
