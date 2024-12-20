import { apiSlice } from "../api/apiSlice";

export const gameApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query({
      query: ({ genre, platform, tag, developer, page, pageSize }) => {
        let query = `/games?page=${page}&page_size=${pageSize}&key=${
          import.meta.env.VITE_API_KEY
        }`;
        if (genre) query += `&genres=${genre}`;
        if (platform) query += `&platforms=${platform}`;
        if (tag) query += `&tags=${tag}`;
        if (developer) query += `&developers=${developer}`;
        return query;
      },
      providesTags: ["games"],
    }),
    getGame: builder.query({
      query: (id) => `/games/${id}?key=${import.meta.env.VITE_API_KEY}`,
    }),

    getGameScreenShots: builder.query({
      query: ({ id, page = 1, pageSize = 3 }) =>
        `/games/${id}/screenshots?key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}&page_size=${pageSize}`,
    }),
    getLatestGames: builder.query({
      query: ({ page = 1, pageSize = 4 }) =>
        `/games?key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}&page_size=${pageSize}&ordering=-released`,
    }),
    getTrailer: builder.query({
      query: (id) => `/games/${id}/movies?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getStores: builder.query({
      query: (id) => `/games/${id}/stores?key=${import.meta.env.VITE_API_KEY}`,
    }),
    getRelatedGames: builder.query({
      query: (tags) =>
        `/games?tags=${tags}&key=${
          import.meta.env.VITE_API_KEY
        }&page=3&page_size=4`,
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetGameQuery,
  useGetLatestGamesQuery,
  useGetGameScreenShotsQuery,
  useGetTrailerQuery,
  useGetStoresQuery,
  useGetRelatedGamesQuery,
} = gameApi;
