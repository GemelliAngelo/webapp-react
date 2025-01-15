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
      <div className="row">
        {movies.map((movie) => (
          <div className="col-4">
            <Link to={"/movies/" + movie.id}>
              <div class="card text-bg-dark">
                <img src={movie.image} class="card-img" />
                <div class="card-img-overlay">
                  <h5 class="card-title">{movie.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
