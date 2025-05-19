import { Link } from "react-router-dom";
import logo from "../images/icons8-book-64.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-body">
      <div className="logo-body">
        <img className="logo-image" src={logo} alt="" />
        <h2 className="logo-name">BookSearch</h2>
      </div>
      <nav className="nav-body">
        <Link className="link-home-page" to="/">
          Home
        </Link>
        <Link className="link-about-page" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
};

export default Header;
