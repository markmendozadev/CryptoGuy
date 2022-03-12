import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">CryptoGuy</Link>
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="coins">All Coins</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;