import React, { useEffect, useState } from "react";

import MovieList from "./MovieList";

import { getFavoritesMovies } from "@tcc-app/core";
import MessageBox from "./MessageBox";

import { Spinner } from "reactstrap";

function FavoriteMovie() {
  const [showSpinner, setShowSpinner] = useState(false);

  const [showMovie, setShowMovie] = useState(false);
  const [movies, setMovies] = useState(null);

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [messageBox, setMessageBox] = useState(false);

  const spinner = (
    <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
  );

  async function getFavorite() {
    setShowSpinner(true);

    await getFavoritesMovies()
      .then((response) => {
        setShowSpinner(false);
        if (response.data[0]) {
          setMovies(response.data);
        } else {
          setShowSpinner(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setShowSpinner(false);
        setMessageBox("Database no Reached");
      });
  }


  useEffect(() => {
    getFavorite();
  }, []);

  useEffect(() => {
    if (movies) {
      setShowMovie(true);
      setShowMessageBox(false);
    }
  }, [movies]);

  useEffect(() => {
    if (!showSpinner && !movies) {
      setShowMovie(false);
      setShowMessageBox(true);
      setMessageBox("No favorites");
    } else {
      setShowMessageBox(false);
    }
  }, [showSpinner]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {showSpinner ? spinner : null}
      </div>
      {showMovie ? <MovieList movies={movies} /> : null}
      {showMessageBox ? <MessageBox name={messageBox} /> : null}
    </div>
  );
}

export default FavoriteMovie;
