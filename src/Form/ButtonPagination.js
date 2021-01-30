import React from 'react';
import styles from './ButtonPagination.module.css';

const ButtonPagination = ({ url, name, setOffset, setLimit, ...props }) => {
  function handleClick() {
    const params = new URL(url);
    const paramsOffset = params.searchParams.get('offset');
    const paramsLimit = params.searchParams.get('limit');
    setOffset(paramsOffset);
    setLimit(paramsLimit);
  }

  return (
    <button
      onClick={handleClick}
      {...props}
      className={`${styles.button} ${styles[name]}`}
    ></button>
  );
};

export default ButtonPagination;
