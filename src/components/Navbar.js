import { Link } from "react-router-dom";
import GTAI from "../assets/GTAI.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <h3 className="nav-link-text">HOME</h3>
      </Link>
      <div className="logo-container">
      <Link to="/" className="logo-link">
        <img src={GTAI} alt="Logo" className="logo-icon" />
        </Link>
      </div>
      <Link to="/carindex" className="nav-link">
        <h3 className="nav-link-text">VIEW LISTINGS</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
