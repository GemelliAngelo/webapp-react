import { useState, useEffect } from "react";

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
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
