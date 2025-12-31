import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import PaginationButton from "../components/PaginationButton";
import Loader from "../components/Loader";
import { searchMovies,getMovieDetails } from "../utils/api";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const data = await searchMovies(query, 1);
    setMovies(data.Search || []);
    setPage(1);
    setLoading(false);
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    const data = await searchMovies(query, nextPage);
    setMovies((prev) => [...prev, ...(data.Search || [])]);
    setPage(nextPage);
  };
  const handleClickMovie = async (id) => {
    const data=await getMovieDetails(id);
    setDetails(data);
  }
  

  return (
    <div>
      <SearchBar value={query} onChange={setQuery} onSearch={fetchMovies} />

      {loading && <Loader />}

      <div className="movie-grid">
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>

      {movies.length > 0 && <PaginationButton onClick={loadMore} />}
    </div>
  );
}
