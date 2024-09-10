import React, {useState} from "react";

import {Link} from "react-router-dom";

const NavbarOne = () => {
  const [open, setOpen] = useState(false);

  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  return (
    <>
      <header className='navbar-area'>
        <nav
          className={"navbar navbar-area-1 navbar-area navbar-expand-lg sticky-active"}
        >
          <div className='container nav-container'>
            <div className='responsive-mobile-menu'>
              <button
                onClick={() => setOpen(!open)}
                className={
                  open
                    ? "menu toggle-btn d-block d-lg-none open"
                    : "menu toggle-btn d-block d-lg-none "
                }
                data-target='#transpro_main_menu'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='icon-left'/>
                <span className='icon-right'/>
              </button>
            </div>
            <div className='logo'>
              <Link to='/'>
                <img src='assets/img/logo-2.png' alt='GAF'/>
              </Link>
            </div>
            <div className='nav-left-part'></div>
            <div
              className={
                open
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id='transpro_main_menu'
            >
              <ul className='navbar-nav menu-open'>
                <li>
                  <Link to='/'>Acceuil</Link>
                </li>
                <li>
                  <Link to='/'>Formations</Link>
                </li>
                <li>
                  <Link to='/'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* navbar end */}
    </>
  );
};

export default NavbarOne;
