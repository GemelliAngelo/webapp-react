import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <footer className="text-bg-dark fixed-bottom">
        <div className="container">
          <h2>Footer</h2>
        </div>
      </footer>
    </>
  );
}
