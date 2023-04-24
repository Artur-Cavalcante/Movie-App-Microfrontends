import "./styles/global.css";

export {
  getFavoritesMovies,
  postFavoritesMovies,
  deleteFavoritesMovies,
} from "./services/favorites/favoritesApi";

export {
  getMovieByText,
  getPopularMovies,
  getMovieDetails,
  getGenreMovie,
  getCastMovie,
} from "./services/themoviedb/themoviedbApi";
