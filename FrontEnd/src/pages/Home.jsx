import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <div>
      <header className="fixed-top bg-white" style={{ height: "100px" }}>
        <NavBar />
      </header>
      <div style={{ paddingTop: "100px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
