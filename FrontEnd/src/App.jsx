import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./index.css";
import Home from "./pages/Home";
import LandingPage from "./components/LandingPage";
import Dashboard from "./pages/Dashboard";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set the duration of the animations in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 200, // Offset (in px) from the original trigger point
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
