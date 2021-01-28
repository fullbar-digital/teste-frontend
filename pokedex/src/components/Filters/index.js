import { useContext, useState } from "react";
import { FilterAndPaginationContext } from "../../context/FilterAndPaginationContext";
import { GetPokemonsContext } from "../../context/GetPokemonsContext";
import "./style.scss";

const Filters = () => {
  const { pokemons } = useContext(GetPokemonsContext);
  const {
    filterPokemon,
    setFilterPokemon,
    pokemonFiltered,
    setPokemonFiltered,
  } = useContext(FilterAndPaginationContext);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilterPokemon({
      ...filterPokemon,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFilterPokemon({
      ...filterPokemon,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Number(filterPokemon.initialPokemon) > Number(filterPokemon.finalPokemon)
    ) {
      return setError("The start field cannot be greater than the end");
    }

    if (
      filterPokemon.initialPokemon > 300 ||
      filterPokemon.finalPokemon > 300
    ) {
      return setError("We only have 300 Pokemons");
    }

    const newPokemonFilter = pokemons.filter(
      (pokemon) =>
        pokemon.id >= filterPokemon.initialPokemon &&
        pokemon.id <= filterPokemon.finalPokemon
    );

    setPokemonFiltered({
      ...pokemonFiltered,
      pokemons: newPokemonFilter,
      pagination: {
        initialPokemon: filterPokemon.initialPokemon,
        finalPokemon: filterPokemon.finalPokemon,
        amountOfPokemonPerPage: filterPokemon.amountOfPokemonPerPage,
        pagination: filterPokemon.pagination,
      },
    });

    setFilterPokemon({
      initialPokemon: "",
      finalPokemon: "",
      amountOfPokemonPerPage: "",
      pagination: "",
    });

    setError("");
  };

  return (
    <section className="filter">
      {error && <div className="error">{error}</div>}
      <form className="form-filter" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="input-standard"
            type="number"
            placeholder="Starting pokemon number"
            name="initialPokemon"
            onChange={(e) => handleInputChange(e)}
            value={filterPokemon.initialPokemon}
            required
          />
        </div>
        <div className="input-group">
          <input
            className="input-standard"
            type="number"
            placeholder="Final pokemon number"
            name="finalPokemon"
            onChange={(e) => handleInputChange(e)}
            value={filterPokemon.finalPokemon}
            required
          />
        </div>
        <div className="input-group">
          <select
            className="input-standard select"
            name="amountOfPokemonPerPage"
            onChange={(e) => handleSelectChange(e)}
            value={filterPokemon.amountOfPokemonPerPage}
            required
          >
            <option value="" disabled>
              Amount of pokemon per page
            </option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="input-group">
          <select
            className="input-standard select"
            name="pagination"
            onChange={(e) => handleSelectChange(e)}
            value={filterPokemon.pagination}
            required
          >
            <option value="" disabled>
              Pagination Mode
            </option>
            <option value="Infinit Scroll">Infinit Scroll</option>
            <option value="Pagination">Pagination</option>
          </select>
        </div>

        <div className="input-group">
          <button className="button-filter">FILTER</button>
        </div>
      </form>
    </section>
  );
};

export default Filters;
