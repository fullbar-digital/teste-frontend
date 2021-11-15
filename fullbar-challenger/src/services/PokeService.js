import pokeApi from "@/factories/PokeFactory";


export const getPokemons = (min, max) => {
    const response =  pokeApi.get(`pokemon?limit=${max}&offset=${min}`);
      
    return response;
}

export const getPokemon = (num) => {
    const response =  pokeApi.get(`pokemon/${num}`);
      
    return response;
}
