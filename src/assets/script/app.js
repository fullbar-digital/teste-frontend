const app = {
  // API Pokemon
  urlPokedex(from, quantity) {
    return `https://pokeapi.co/api/v2/pokemon?offset=${from}&limit=${quantity}`
  },
  // API das imagens dos Pokemons
  imgPokemon(id) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
  }
};

export default app;
