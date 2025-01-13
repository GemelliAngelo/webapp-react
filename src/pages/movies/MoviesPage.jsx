import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL + "movies";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="container">
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              className="link-dark link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              to={"/movies/" + movie.id}
            >
              <h2>{movie.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
