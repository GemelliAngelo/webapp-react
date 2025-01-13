import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Movies from "./pages/Movies";
import DefaultLayout from "../layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
