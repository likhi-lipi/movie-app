import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getMovieDetails } from "../utils/api";
import { FavoritesContext } from "../context/FavoritesContext";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFav = favorites.some((m) => m.imdbID === id);

  useEffect(() => {
    (async () => {
      setMovie(await getMovieDetails(id));
    })();
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="details-page">
      <img src={movie.Poster} alt={movie.Title} />

      <div>
        <h1>{movie.Title}</h1>
        <p>{movie.Genre}</p>
        <p>{movie.Plot}</p>

        {isFav ? (
          <button onClick={() => removeFavorite(id)}>Remove from Favorites</button>
        ) : (
          <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
        )}
      </div>
    </div>
  );
}
