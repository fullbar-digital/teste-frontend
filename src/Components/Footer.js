import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Feito com ❤ por{' '}
        <a href="https://daniel-andre.github.io/portfolio/">Daniel!</a>
      </p>
    </footer>
  );
};

export default Footer;
