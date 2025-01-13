import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const [movie, setMovie] = useState();

  const { id: movieId } = useParams();
  const url = import.meta.env.VITE_BACKEND_URL + "movies/" + movieId;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);

  return (
    <div className="container py-5">
      <h1>Movie Details</h1>

      {movie && (
        <>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img className="img-fluid" src={movie.image} />
              </div>
              <div className="col-md-8 bg-dark-subtle">
                <div className="card-body">
                  <h2 className="card-title">{movie.title}</h2>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {movie.director}
                    </small>
                  </p>
                  <p className="card-text">{movie.abstract}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">{movie.genre}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2>Reviews</h2>
          <div className="d-flex gap-3">
            {movie.reviews.map((review) => (
              <div key={review.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">{review.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {review.vote}
                  </h6>
                  <p className="card-text">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
