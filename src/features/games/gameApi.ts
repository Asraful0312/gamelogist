import { apiSlice } from "../api/apiSlice";

export const gameApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query({
      query: ({ page = 1, pageSize = 10 }) =>
        `/games?key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}&page_size=${pageSize}`,
    }),
    getGame: builder.query({
      query: (id) => `/games/${id}?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getLatestGames: builder.query({
      query: ({ page = 1, pageSize = 4 }) =>
        `/games?key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}&page_size=${pageSize}&ordering=-released`,
    }),
  }),
});

export const { useGetGamesQuery, useGetGameQuery, useGetLatestGamesQuery } =
  gameApi;
