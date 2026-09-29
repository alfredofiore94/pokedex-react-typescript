import "./navigation-bar.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Link to="/" className="btn btn-ghost text-xl">
        Home
      </Link>
      <Link to="/pokemon-research" className="btn btn-ghost text-xl">
        Ricerca
      </Link>
    </div>
  );
}

export default NavigationBar;
