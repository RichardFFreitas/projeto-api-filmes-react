import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa6";


const imageURL = import.meta.env.VITE_IMG;





const MovieCard = ({ movie, showLink = true }) => {

    const genreMapper = {
    28: 'Ação',
    16: 'Animação',
    12: 'Aventura',
    35: 'Comédia',
    80: 'Crime',
    99: 'Documentário',
    18: 'Drama',
    10751: 'Família',
    14: 'Fantasia',
    36: 'História',
    27: 'Terror',
    10402: 'Música',
    9648: 'Mistério',
    10749: 'Romance',
    878: 'Ficção científica',
    53: 'Thriller',
    10770: 'War',
    37: 'Faroeste',
};

    const genres = movie.genre_ids.map(id => genreMapper[id]);
    
    return (
        <div className='movie-card'>
            <img src={imageURL + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p className='movie-genre'>{genres.join(', ')}</p>
            <p>
            <FaRegStar /> {movie.vote_average.toFixed(1)}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}


export default MovieCard