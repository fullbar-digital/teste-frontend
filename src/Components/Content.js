import React from 'react';
import ButtonPagination from '../Form/ButtonPagination';
import Image from '../Helper/Image';
import styles from './Content.module.css';
import Modal from './Modal';

const Content = ({ data, previous, next, setLimit, setOffset }) => {
  const [modalData, setModalData] = React.useState(null);
  const [modal, setModal] = React.useState(false);

  async function openModal(idItem) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idItem}`);
    const { id, name, types, sprites, weight } = await response.json();
    setModalData({ id, name, types, sprites, weight });
    setModal(true);
  }

  return (
    <div className={`${styles.content} anime`}>
      {modalData && modal && <Modal data={modalData} setModal={setModal} />}
      <div className={styles.divButton}>
        {previous ? (
          <ButtonPagination
            name="arrow-left"
            url={previous}
            setOffset={setOffset}
            setLimit={setLimit}
          />
        ) : (
          <ButtonPagination name="arrow-left" disabled />
        )}
        {next && (
          <ButtonPagination
            name="arrow-right"
            url={next}
            setOffset={setOffset}
            setLimit={setLimit}
          />
        )}
      </div>
      <ul className={styles.list}>
        {data &&
          data.map((item, index) => {
            return (
              <li
                key={item.id}
                className={styles.listItem}
                onClick={() => openModal(item.id)}
              >
                <div className={styles.divImg}>
                  <Image src={item.sprites.front_default} alt={item.name} />
                  <span className={styles.id}>#{item.id}</span>
                </div>
                <div className={styles.divContent}>
                  <h2>{item.name}</h2>
                  <ul className={styles.types}>
                    {item.types.map((type) => {
                      return (
                        <li
                          className={styles[type.type.name]}
                          key={type.type.name}
                        >
                          {type.type.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Content;
