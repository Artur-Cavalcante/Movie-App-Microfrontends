import { baseApi } from './baseApi';
import { apiKey } from "./utils/apiKey";

async function getCastMovie(IdMovie) {
    return await baseApi.get("/movie/" + IdMovie + "/credits", {
        params: {
            api_key: apiKey
        }
    });
};

async function getGenreMovie() {
    return await baseApi.get("/genre/movies/list", {
        params: {
            api_key: apiKey
        }
    });
};

async function getMovieDetails(IdMovie) {
    return await baseApi.get("/movie/" + IdMovie, {
        params: {
            api_key: apiKey
        }
    });
};

async function getPopularMovies(page) {
    return await baseApi.get("/movie/popular", {
        params: {
            api_key: apiKey,
            page: page 
        }
    });
};

async function getMovieByText(searchText, page) {
    return await baseApi.get("/search/movie", {
        params: {
            api_key: apiKey,
            page: page,
            query: searchText 

        }
    });
};

export {
    getMovieByText,
    getPopularMovies,
    getMovieDetails,
    getGenreMovie,
    getCastMovie
}