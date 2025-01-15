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
          key={i}
          className={`fa-${
            i < rating ? `solid` : `regular`
          } fa-star text-warning`}
        ></i>
      );
      stars.push(star);
    }
    return stars;
  };

  const defaultFormData = {
    name: "",
    text: "",
    vote: "",
  };

  const [formData, setFormData] = useState(defaultFormData);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = import.meta.env.VITE_BACKEND_URL + "movies/" + movieId;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData(defaultFormData);
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setMovie(data);
          });
      });
  };

  return (
    <div className="container py-5">
      {movie && (
        <>
          <section className="mb-5">
            <div className="card mb-3 text-bg-dark">
              <div className="row g-0">
                <div className="col-md-4">
                  <img className="img-fluid" src={movie.image} />
                </div>
                <div className="col-md-8 ">
                  <div className="card-body">
                    <h5>Title:</h5>
                    <h2 className="h1 card-title pb-3 ">{movie.title}</h2>
                    <hr />
                    <h5>Director:</h5>
                    <p className="card-text fs-4 pb-3">
                      <small>{movie.director}</small>
                    </p>
                    <hr />
                    <h5>Abstract:</h5>
                    <p className="card-text fs-2 pb-3 ">{movie.abstract}</p>
                    <hr />
                    <h5>Genre:</h5>
                    <p className="card-text fs-4 pb-3">
                      <small>{movie.genre}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className="mt-5">
            <h2 className="pb-3">Reviews</h2>
            <form onSubmit={handleSubmit} className="pb-5">
              <div className="row row-cols-4 g-3">
                <div className="col">
                  <input
                    name="name"
                    onChange={handleFormChange}
                    type="text"
                    className="form-control"
                    aria-label="First name"
                    value={formData.name}
                  />
                </div>
                <div className="col">
                  <input
                    name="vote"
                    onChange={handleFormChange}
                    type="text"
                    className="form-control"
                    aria-label="Last name"
                    value={formData.vote}
                  />
                </div>
                <div className="col">
                  <input
                    name="text"
                    onChange={handleFormChange}
                    type="text"
                    className="form-control"
                    aria-label="Last name"
                    value={formData.text}
                  />
                </div>
                <div className="col ">
                  <button className="btn btn-dark" type="submit">
                    <i className="fa-solid fa-share"></i>
                  </button>
                </div>
              </div>
            </form>
            <div className="row g-3">
              {movie.reviews.map((review) => (
                <div key={review.id} className="col-4">
                  <div className="card text-bg-dark">
                    <div className="card-body">
                      <h5 className="card-title">{review.name}</h5>

                      {generateStars(review.vote).map((star) => star)}

                      <p className="card-text">{review.text}</p>
                    </div>
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
