import React from 'react';
import styles from './Filter.module.css';

const selectOptions = [10, 20, 30];

const Filter = ({ limit, setLimit, offset, setOffset, total }) => {
  const [select, setSelect] = React.useState(limit);
  const [input, setInput] = React.useState(1);

  function selectChange({ target }) {
    setSelect(target.value);
  }

  function inputChange({ target }) {
    setInput(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLimit(select);
    setOffset(input - 1);
    window.localStorage.setItem('select_limit', select);
  }

  return (
    <aside className={styles.filter}>
      <h1>Filtros</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-initial-item">Item inicial</label>
          <input
            type="number"
            min="1"
            max={total}
            value={input}
            onChange={inputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="select-limit">Itens por página</label>
          <select id="select-limit" value={select} onChange={selectChange}>
            {selectOptions.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <button className={styles.button}>Aplicar filtros</button>
      </form>
    </aside>
  );
};

export default Filter;
