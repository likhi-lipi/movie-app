import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getMovieDetails } from "../utils/api";
import { FavoritesContext } from "../context/FavoritesContext";
import Loader from "../components/Loader";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some((m) => m.imdbID === id);

  useEffect(() => {
    (async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    })();
  }, [id]);

  if (!movie) return <Loader />;

  return (
    <div className="details-page">
      <img src={movie.Poster} alt={movie.Title} />

      <div className="details-info">
        <h1>{movie.Title}</h1>
        <p><b>Genre:</b> {movie.Genre}</p>
        <p><b>Actors:</b> {movie.Actors}</p>
        <p><b>Runtime:</b> {movie.Runtime}</p>
        <p><b>Rating:</b> {movie.imdbRating}</p>
        <p className="plot">{movie.Plot}</p>

        {isFavorite ? (
          <button onClick={() => removeFavorite(id)}>Remove from Favorites</button>
        ) : (
          <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
        )}
      </div>
    </div>
  );
}
