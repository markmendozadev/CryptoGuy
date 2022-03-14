import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Search from "../Search";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={classes.navbar__container}>
        <h2>
          <Link to="/">CryptoGuy</Link>
        </h2>
        <button
          className={classes.mobileNavToggle}
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {isOpen ? "X" : <FaBars />}
        </button>
        {isOpen && (
          <div
            className={classes.nav__overlay}
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <nav className={classes.navbar}>
          <ul
            className={[
              classes.primaryNavigation,
              isOpen ? classes.isOpen : classes.isClose,
            ].join(" ")}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="coins">Coins</Link>
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
