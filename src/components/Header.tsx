import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="Header">
      <div className="button-container">
        <button
          className={location.pathname === "/" ? "on" : "off"}
          disabled={location.pathname === "/"}
          onClick={() => Navigate("/")}
        >
          Home
        </button>
        <button
          className={location.pathname === "/about" ? "on" : "off"}
          disabled={location.pathname === "/about"}
          onClick={() => Navigate("/about")}
        >
          About
        </button>
        <button
          className={location.pathname === "/portfolio" ? "on" : "off"}
          disabled={location.pathname === "/portfolio"}
          onClick={() => Navigate("/portfolio")}
        >
          Portfolio
        </button>
      </div>

     
    </div>
  );
};

export default Header;
