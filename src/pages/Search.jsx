import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { LuLoader2 } from "react-icons/lu"
import MovieCard from "../components/MovieCard"


const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css"

const Search = () => {
    const [searchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(true);


    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            setIsLoading(false);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
        const timeoutDelay = 0;

        const timeoutId = setTimeout(() => {
            setIsLoading(true)
            getSearchMovies(searchWithQueryURL);
        }, timeoutDelay, setIsLoading(false));

        return () => clearTimeout(timeoutId);
    }, [query]);

    return (
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            {isLoading ? (
                <div className="loading-container">
                    <LuLoader2 className="loading-icon" size={35} />
                </div>
            ) : (
                <div className="movies-container">
                    {movies.length > 0 &&
                        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
                
            )}
        </div>
    )
}

export default Search
