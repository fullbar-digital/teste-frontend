import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../Assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
