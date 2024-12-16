import { apiSlice } from "../api/apiSlice";

export const filterApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlatforms: builder.query({
      query: ({ page, pageSize }) =>
        `/platforms?key=${
          import.meta.env.VITE_API_KEYs
        }&page=${page}&page_size=${pageSize}`,
      providesTags: ["games"],
    }),
  }),
});

export const { useGetPlatformsQuery } = filterApi;
