import React from 'react';
import styles from './NotFound.module.css';
import notFound from '../Assets/notFound.gif';
import Image from '../Helper/Image';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className={styles.section}>
      <h1>
        <Link to="/">
          Mestre Pokémon, a página que você procurou não existe, volte a sua
          jornada!
        </Link>
      </h1>
      <Image src={notFound} alt="Not Found" />
    </section>
  );
};

export default NotFound;
