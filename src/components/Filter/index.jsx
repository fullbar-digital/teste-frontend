import { useEffect, useState } from "react";
import "./style.scss";

export const Filter = ({ filters }) => {

  // Valores default para primeira rendirização
  const defaultStaticValues = {render: 'scroll', quantity: '10'} 
  const defaultFormValues = {from: '1'}

  // A diferença entre o valor estático e o dinâmico 
  // Quando os valores estáticos mudam a lista dos Pokemons muda com ele
  // Valores dinâmicos apenas fazem a lista mudar quando clica no botão aplicar
  const [formValues, setFormValues] = useState(defaultFormValues) // Valores dinâmmicos
  const [instantRender, setinstantRender] = useState(defaultStaticValues) // Valores estáticos 

  // Envia os valores do formulário para o Parent
  function handleSubmit(e){
    e.preventDefault(); 
    filters(formValues)
  }

  // Na primeira renderização passa os dados estáticos para o componente PokemonList
  useEffect(() => {
    filters(instantRender)
  }, [instantRender,filters])
  
  // Observa quais inputs ocorreram mudanças e aplica as mudanças
  // Valores dinâmicos sendo os inputs da direita 
  // Valores estáticos sendo os inputs da esquerda 
  const handleChangeValues = (e) => {
    const parentClassName = e.target.parentElement.classList[0]
    switch (parentClassName) {
      case 'filter__left':
        setFormValues((prevValues) => ({
          ...prevValues,
          [e.target.name]: e.target.value - 1, // Há operação lógica, pois senão o primeiro Pokemon nunca será renderizado
        }));
        break;
      case 'filter__rigth':
        setinstantRender((prevValues) => ({
          ...prevValues,
          [e.target.name]: e.target.value,
        }));
        break;
      default:
        console.log('error')
        break;
    }
  };

  return (
    <>
      <section className="filter">
        <h4 className="filter__title">PokeId</h4>
        <form onSubmit={handleSubmit} className="filter__form">
          {/* Lado esquerdo
            * Valores dinâmicos 
            */}
          <div className="filter__left">
            <input type="number" name="from" min={1} onChange={handleChangeValues} placeholder="1" required />
            <span>até</span>
            <input type="number" name="to" max={200} onChange={handleChangeValues} placeholder="200" required/>
            <button type="submit" >aplicar</button>
          </div>
          {/* Lado direito
            * Valores estáticos 
            */}
          <div className="filter__rigth">
            <select name="render" onChange={handleChangeValues}>
              <option value="scroll">Scroll infinito</option>
              <option value="pagination">Paginação</option>
            </select>
            <select name="quantity" onChange={handleChangeValues}>
              <option value="10">Exibir 10 resultados</option>
              <option value="20">Exibir 20 resultados</option>
              <option value="30">Exibir 30 resultados</option>
            </select>
          </div>
        </form>
      </section>
    </>
  );
};
