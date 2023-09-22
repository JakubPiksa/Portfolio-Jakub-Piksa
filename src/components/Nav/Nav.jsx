import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './nav.module.css';

const NavMenu = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.navList}>
        <li className={css.navElement}>
          <NavLink to="/"><button className={css.navButton}>Home</button></NavLink>
        </li>
        <li className={css.navElement}>
          <NavLink to="/about"><button className={css.navButton}>About me</button></NavLink>
        </li>
        <li className={css.navElement}>
          <NavLink to="/portfolio"><button className={css.navButton}>My projects</button></NavLink>
        </li>
        <li className={css.navElement}>
          <NavLink to='/contact'><button className={css.navButton}>Contact</button></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
