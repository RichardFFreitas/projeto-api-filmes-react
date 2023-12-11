import { useState, useEffect } from "react";
import { LuLoader2 } from "react-icons/lu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const getTopRatedMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setTopMovies(data.results);
            setTotalPages(data.total_pages);
            setIsLoading(false);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
            setIsLoading(false);
        }
    };

    const fetchMovies = async () => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}&page=${page}`;
        getTopRatedMovies(topRatedUrl);
    };

    useEffect(() => {
        const timeoutDelay = 0;

        const timeoutId = setTimeout(() => {
            fetchMovies();
        }, timeoutDelay);

        return () => clearTimeout(timeoutId);
    }, [page]);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            {isLoading ? (
                <div className="loading-container">
                    <LuLoader2 className="loading-icon" size={35} />
                </div>
            ) : (
                <>
                    <div className="pagination-container">
                        <button disabled={page === 1} onClick={handlePreviousPage}><FaArrowAltCircleLeft /></button>
                        <span>Página {page} de {totalPages}</span>
                        <button disabled={page === totalPages} onClick={handleNextPage}> <FaArrowAltCircleRight /></button>
                    </div>
                    <div className="movies-container">
                        {topMovies.length > 0 &&
                            topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
