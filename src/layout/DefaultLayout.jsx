import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <footer className="text-bg-dark">
        <div className="container">Footer</div>
      </footer>
    </>
  );
}
