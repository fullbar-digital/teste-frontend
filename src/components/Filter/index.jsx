import "./style.scss";

export const Filter = () => {
  return (
    <>
      <section id="filter">
        <h4 className="filter__title">PokeId</h4>
        <div className="filter__left">
          <input type="text" name="from" min={1} minLength={1} placeholder="1" />
          <span>até</span>
          <input type="text" name="to" max={200} maxLength={3} placeholder="200" />
          <button onClick={() => console.log('funcionei')} >aplicar</button>
        </div>
        <div className="filter__rigth">
          <select name="render" id="">
            <option value="scroll">Scroll infinito</option>
            <option value="pagination">Paginação</option>
          </select>
          <select name="quantity" id="">
            <option value="10">Exibir 10 resultados</option>
            <option value="20">Exibir 20 resultados</option>
            <option value="30">Exibir 30 resultados</option>
          </select>
        </div>
      </section>
    </>
  );
};
