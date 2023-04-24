import React, { useState, useEffect } from "react";

import MoviePreview from "./MoviePreview";
import "../styles//MovieList.css";

export default function MovieList(props) {
  const [showMovies ,setShowMovies] = useState(null);
  const [movies ,setMovies] = useState(null);

  function handleShowMovies(){
      if(movies){
          return movies.map((movie) => <MoviePreview key={movie.id} movie={movie} favoriteMovies={movies} /> )   
      }
  }

  useEffect(()=>{
      if(props.movies.length){
          setShowMovies(true);
          setMovies(props.movies);
      }else{
          setShowMovies(false);
      }
  },[props.movies])

  return (
      <div className="list-container">
          {showMovies ? handleShowMovies() : null}
      </div>
  );
}
