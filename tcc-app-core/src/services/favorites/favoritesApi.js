import { baseApi } from "./baseApi";

async function getFavoritesMovies() {
  return await baseApi.get("/api/FavoriteMovies");
}

async function postFavoritesMovies(movie) {
  return await baseApi.post("/api/FavoriteMovies", movie);
}

async function deleteFavoritesMovies(id) {
  return await baseApi.delete("/api/FavoriteMovies", {
    params: {
      id: id,
    },
  });
}

export { getFavoritesMovies, postFavoritesMovies, deleteFavoritesMovies };
