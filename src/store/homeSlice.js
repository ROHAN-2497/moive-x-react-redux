import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfigaration: (state, actions) => {
      state.url = actions.payload;
    },

    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfigaration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
