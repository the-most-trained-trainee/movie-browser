"use client";
import { Provider } from "react-redux";
import store from "@/redux/store";

const Favorites = () => {
  return (
    <div>
      <Provider store={store}>Favorites</Provider>
    </div>
  );
};

export default Favorites;
