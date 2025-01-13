import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import DefaultLayout from "./layout/DefaultLayout";
import MoviesPage from "./pages/movies/MoviesPage";
import MoviePage from "./pages/movies/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies">
            <Route index element={<MoviesPage />} />
            <Route path=":id" element={<MoviePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
