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
    <div className="container">
      <h1>Movie Details</h1>

      {movie && (
        <div>
          <h2>{movie.title}</h2>
          {movie.reviews.map((review) => (
            <ul key={review.id}>
              <li>{review.name}</li>
              <li>{review.vote}</li>
              <li>{review.text}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
