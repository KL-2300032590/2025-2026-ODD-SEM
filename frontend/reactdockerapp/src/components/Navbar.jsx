import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import "../style.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/registration" className="nav-item">Registration</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
