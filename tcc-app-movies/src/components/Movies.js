import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { BrowserRouter } from "react-router-dom";

import { getPopularMovies, getMovieByText, getFavoritesMovies } from "@tcc-app/core";
import MovieList from "./MovieList";
import Paginator from "./Paginator";
import MessageBox from "./MessageBox";

export default function Movies() {
  const spinner = (
    <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
  );
  const [showSpinner, setShowSpinner] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  const [movies, setMovies] = useState(null);

  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [showPaginator, setShowPaginator] = useState(false);

  const [searchText, setSearchText] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  async function toggleNextPage(page) {
    if (page){
      await getMovies(page, searchText);
      window.scrollTo("0", "0");
    }

  }

  function handlerResponseApis(response){
    if(!(response.data.results && response.data.results.length)){
      setShowSpinner(false);
      setShowMovies(false);
      setShowPaginator(false);
      setShowNotFound(true);
    }else{
      setPages(response.data.total_pages);
      setCurrentPage(response.data.page);
      setMovies(response.data.results);
      setShowSpinner(false);
      setShowMovies(true);
      setShowPaginator(true);
    }

    window.scrollTo("0", "0");
  }

  async function getMovies(page, searchText) {
    setShowSpinner(true);

    if (searchText) {
      await getMovieByText(searchText, page)
        .then((response) => handlerResponseApis(response));
    } else {
      await getPopularMovies(page)
        .then((response) => handlerResponseApis(response));
    }
  }

  async function getFavorites() {
    await getFavoritesMovies()
      .then((response) => {
        setFavoriteMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(async () => {
    const searchTextParam = window.location.search.split("=")[1];

    if(searchTextParam != searchText || searchTextParam === undefined){
      
      setSearchText(searchTextParam);
  
      await Promise.all([
        getMovies(undefined, searchTextParam),
        getFavorites()
      ]);
    }
  }, [window.location.href]);
  return (
    <BrowserRouter>
      <div>
        {showMovies ? <MovieList movies={movies} favoriteMovies={favoriteMovies}/> : null}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {showSpinner ? spinner : null}
          {showPaginator ? (
            <Paginator
              pages={pages}
              previousPage={currentPage - 1}
              currentPage={currentPage}
              nextPage={currentPage + 1}
              toggleNextPage={toggleNextPage}
            />
          ) : null}
          {showNotFound ? <MessageBox name="Movie not found."/> : null}
        </div>
      </div>
    </BrowserRouter>
  );
}
