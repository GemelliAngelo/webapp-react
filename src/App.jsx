import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Movies from "./pages/movies/Movies";
import DefaultLayout from "../layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies">
            <Route index element={<Movies />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
