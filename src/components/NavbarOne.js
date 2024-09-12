import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './NavbarOne.css'

const NavbarOne = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="my-navbar">
      <nav className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="assets/img/logo-2.png" alt="GAF" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`menu-toggle ${open ? "open" : ""}`}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`nav-items ${open ? "open" : ""}`}>
            <ul className="navbar-menu">
              <li>
                <Link to="/">TRANSPORT</Link>
              </li>
              <li>
                <Link to="/formation">FORMATIONS</Link>
              </li>
              <li className="has-dropdown">
                <Link to="/">REJOINDRE LE GROUPE</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/">Devenir chauffeur</Link>
                  </li>
                  <li>
                    <Link to="/">Devenir sous-traitant</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarOne;
