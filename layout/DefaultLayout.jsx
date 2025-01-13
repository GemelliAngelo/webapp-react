import Header from "../src/components/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}
