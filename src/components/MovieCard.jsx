import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa6";
import { GenresMovie } from './GenresMovies';

const imageURL = import.meta.env.VITE_IMG;



const MovieCard = ({ movie, showLink = true }) => {
    console.log(movie)
    return (
        <div className='movie-card'>
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p className='movie-genre'>{GenresMovie(movie.genre_ids || movie.genres).join(', ')}</p>
            
            <p>
            <FaRegStar /> {movie.vote_average.toFixed(1)}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}


export default MovieCard