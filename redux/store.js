import { configureStore, combineReducers, createReducer } from "@reduxjs/toolkit";
// import favoritesSliceReducer from "./favoritesSlice";

// const rootReducer = combineReducers({
//   favorites: favoritesSliceReducer,
// })

const favoritesReducer = createReducer(0, {})

const store = configureStore({
  reducer: {
    favorites: favoritesReducer
  },
})

export default store;