import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './nav.module.css';

const NavMenu = () => {
  return (
    <nav className="navigation">
      <ul className={css.navList}>
        <li className={css.navElement}>
          <NavLink to="/"><button>Home</button></NavLink>
        </li>
        <li className={css.navElement}>
          <NavLink to="/about"><button>About me</button></NavLink>
        </li>
        <li className={css.navElement}>
          <NavLink to="/portfolio"><button>My projects</button></NavLink>
        </li>
        <li className={css.navElement}>
          <NavLink to='/contact'><button>Contact</button></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
