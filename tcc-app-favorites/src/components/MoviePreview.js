import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
    FaRegStar,
    FaStar
} from 'react-icons/fa'

import '../styles/MoviePreview.css';

function MoviePreview(props) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [showEmptyStar, setShowEmptyStar] = useState(false);
    const [showFilledStar, setShowFilledStar] = useState(false);

    function handleImgPath(){
        if(props.movie.poster_path){
            return "https://image.tmdb.org/t/p/w500" + props.movie.poster_path;
        }else{
            return "https://tcc-app-builds.s3.amazonaws.com/assets/imgNotFound.jpg";
        }
    }

    function checkIsFavorite(movies, id) {
        for (let index = 0; index < movies.length; index++) {
            const movie = movies[index];

            if (movie.id === id) {
                return true;
            }
        }

    };

    useEffect(() => {
        setIsFavorite(checkIsFavorite(props.favoriteMovies, props.movie.id));
    }, [props.favoriteMovies.length])

    useEffect(() => {
        if (isFavorite) {
            setShowFilledStar(true);
            setShowEmptyStar(false);
        } else {
            setShowEmptyStar(true);
            setShowFilledStar(false);
        }
    }, [isFavorite])

    return (
        <section className="item-container" key={props.movie.id}>
            <div>
                <Link to={"/details?id=" + (props.movie.id ? props.movie.id : null ) } style={{ textDecoration: "none"}} >
                    <div className="img-container">
                        <img className="img-preview" src={handleImgPath()} alt='img' />
                    </div>
                    <div className="title-date-container">
                        {props.movie.title ? props.movie.title : null} ({props.movie.release_date ? props.movie.release_date.split('-')[0] : null})
                        {showEmptyStar ? <FaRegStar style={{color: 'var(--color-star)'}} size="1rem" className="star" /> : null}
                        {showFilledStar ? <FaStar style={{color: 'var(--color-star)'}} size="1rem" className="star" /> : null}
                    </div>
                </Link>
                <div className="rating-container">
                    {props.movie.vote_average ? 'Rating: ' + props.movie.vote_average : null}
                </div>
            </div>
        </section>
    );
};

export default MoviePreview;