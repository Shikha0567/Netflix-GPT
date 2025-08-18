export const NETFLIX_LOGO =
  "src/assets/Netflix-Logo-Streaming-Platform-PNG.webp";
export const USER_AVATAR = "src/assets/loggedIn_user_logo.jpg";

export const POPULAR_MOVIES_GET_URL = "https://api.trakt.tv/movies/popular";

export const TRAKT_HEADER = {
  "Content-Type": "application/json",
  "trakt-api-version": 2,
  "trakt-api-key": import.meta.env.VITE_TRAKT_CLIENT_ID,
};

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US";

export const TMDB_API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
  },
};
