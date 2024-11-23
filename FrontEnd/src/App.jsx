import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./index.css";
import Home from "./pages/Home";
import LandingPage from "./components/LandingPage";
import ProductForm from "./pages/Dashboard";
import PasswordReset from "./pages/PasswordReset";
import UpdatePassword from "./pages/UpdatePassword";
import Watches from "./pages/Watches";
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
        <Route path="watches" element={<Watches />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProductForm />} />
      <Route path="/reset-password" element={<PasswordReset />} />
      <Route path="/update-password/:token" element={<UpdatePassword />} />
    </Routes>
  );
}
export default App;
