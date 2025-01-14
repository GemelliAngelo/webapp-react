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

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const star = (
        <i
          className={`fa-${
            i < rating ? `solid` : `regular`
          } fa-star text-warning`}
        ></i>
      );
      stars.push(star);
    }
    return stars;
  };

  return (
    <div className="container py-5">
      <h1 className="text-center text-danger pb-4">MOVIE DETAILS</h1>

      {movie && (
        <>
          <section className="mb-5">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img className="img-fluid" src={movie.image} />
                </div>
                <div className="col-md-8 text-bg-dark">
                  <div className="card-body">
                    <h5 className="text-bg-secondary">Title:</h5>
                    <h2 className="h1 card-title pb-3 ">{movie.title}</h2>
                    <h5 className="text-bg-secondary">Director:</h5>
                    <p className="card-text fs-4 pb-3">
                      <small>{movie.director}</small>
                    </p>
                    <h5 className="text-bg-secondary">Abstract:</h5>
                    <p className="card-text fs-2 pb-3 ">{movie.abstract}</p>
                    <h5 className="text-bg-secondary">Genre:</h5>
                    <p className="card-text fs-4 pb-3">
                      <small>{movie.genre}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <h2 className="py-3">Reviews</h2>
            <div className="d-flex gap-3">
              {movie.reviews.map((review) => (
                <div key={review.id} className="card text-bg-dark">
                  <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>

                    {generateStars(review.vote).map((star) => star)}

                    <p className="card-text">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
