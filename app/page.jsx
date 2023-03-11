// import Image from 'next/image'
// import styles from './page.module.css'

import { Roboto } from "next/font/google";
import SearchBar from "./SearchBar";
import getMovies from "./getMovies";
import MovieCard from "./MovieCard";

const font = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Home = async () => {
  // const movies = await getMovies();

  return (
    <>
      <p className={font.className}>test home page</p>
      <SearchBar />
    </>
  );
};

export default Home;
