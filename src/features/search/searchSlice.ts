import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerms: "",
  },
  reducers: {
    getSearchTerms: (state, action) => {
      state.searchTerms = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { getSearchTerms } = searchSlice.actions;
