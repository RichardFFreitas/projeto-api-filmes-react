import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IoCashOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { GenresMovie } from '../components/GenresMovies';


import MovieCard from "../components/MovieCard"

import "./Movie.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams()
    const [movie, setMovie] = useState(null)



    const getMovie = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovie(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
            setIsLoading(false);
        }
    };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    }
    useEffect(() => {
        const movieURL = `${moviesURL}${id}?${apiKey}`
        getMovie(movieURL)
    }, [])

    if (!movie) return

    return (
        <div className="movie-page">
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3>
                            <IoCashOutline /> Generos:
                        </h3>
                        {movie.genres.map((g, i) => (
                            <p key={i} className='movie-genre'>{g.name}</p>
                        ))}
                        <h3>
                            <IoCashOutline /> Orçamento:
                        </h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUpArrow /> Faturamento:
                        </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <CiClock1 /> Duração:
                        </h3>
                        <p>{movie.runtime} minutos</p>
                    </div>
                    <div className="info description">
                        <h3>
                            <MdOutlineSpeakerNotes /> Descrição
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Movie