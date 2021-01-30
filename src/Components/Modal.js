import React from 'react';
import Image from '../Helper/Image';
import contentStyles from './Content.module.css';
import styles from './Modal.module.css';

const Modal = ({ data, setModal }) => {
  function handleClick({ target, currentTarget }) {
    console.log(target, currentTarget);
    if (target === currentTarget) setModal(false);
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={`${styles.modal} ${contentStyles.listItem}`}>
        <div className={contentStyles.divImg}>
          <Image src={data.sprites.front_default} alt={data.name} />
          <span className={contentStyles.id}>#{data.id}</span>
        </div>
        <div className={contentStyles.divContent}>
          <h2>{data.name}</h2>
          <span className={contentStyles.weight}>Weight: {data.weight}</span>
          <ul className={contentStyles.types}>
            {data.types.map((type) => {
              return (
                <li
                  className={contentStyles[type.type.name]}
                  key={type.type.name}
                >
                  {type.type.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
