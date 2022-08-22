const functions = {
  // Função que trata os ids dos Pokemons
  // Retorna como string e no min. 3 números/letras/char
  minThreeNums(id) {
    let numberPokemon = id.toString();
    while (numberPokemon.length < 3) numberPokemon = "0" + numberPokemon;
    return numberPokemon;
  },
};

export default functions;
