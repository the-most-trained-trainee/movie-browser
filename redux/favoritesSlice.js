import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: ['movie1', 'movie2'],
  },
  extraReducers: {}
})

export default favoritesSlice.reducer;