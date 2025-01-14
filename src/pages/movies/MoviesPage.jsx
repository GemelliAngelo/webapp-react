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
    <div className="container py-5">
      <h1 className="text-center text-danger pb-4">MOVIES LIST</h1>
      {movies.map((movie) => (
        <div key={movie.id} className="card my-3">
          <div className="card-header">{movie.created_at}</div>
          <div className="card-body text-bg-dark">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.abstract}</p>
            <Link to={"/movies/" + movie.id} className="btn btn-outline-light">
              Dettagli
            </Link>
          </div>
          <div className="card-footer text-body-secondary">
            {movie.updated_at}
          </div>
        </div>
        // <li key={movie.id}>
        //   <Link
        //     className="link-dark link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        //     to=
        //   >
        //     <h2></h2>
        //   </Link>
        // </li>
      ))}
    </div>
  );
}
