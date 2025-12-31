const API_KEY = "9153b1b1";

export const searchMovies = async (query, page = 1) => {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`;
  const res = await fetch(url);
  return res.json();
};

export const getMovieDetails = async (id) => {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;
  const res = await fetch(url);
  return res.json();
};
