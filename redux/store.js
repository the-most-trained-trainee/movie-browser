import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesSliceReducer from "./favoritesSlice";

const rootReducer = combineReducers({
  favorites: favoritesSliceReducer,
})

const store = configureStore({
  reducer: {},

})

export default store;