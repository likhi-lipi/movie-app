import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Your Favorite Movies</h1>
      <div className="movie-grid">
        {favorites.length === 0 && <p>No favorites added yet.</p>}
        {favorites.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>
    </div>
  );
}
