import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
