import { createStore } from 'vuex';
import api from '../service/api';
export default createStore({
  state: {
    initial: 0,
    final: 1118,
    itemsPerPage: 10,
    typePagination: 'Fluido',
    totalOfItens: 0,
    allPoke: {},
    pokemon: {},
  },
  mutations: {
    SET_ALLPOKE(state, allPoke) {
      state.allPoke = allPoke;
      console.log('Atualizou o state', state.allPoke);
    },
    SET_POKEMON(state, pokemon) {
      state.pokemon = pokemon;
    },
    SET_NUMBER_INITIAL(state, initial) {
      state.initial = initial;
    },
    SET_NUMBER_FINAL(state, final) {
      state.final = final;
    },
  },
  actions: {
    async fetchAllPokemons({ commit }) {
      try {
        const { data } = await api.get(
          `pokemon?limit=${this.state.final}&offset=${this.state.initial}`
        );
        commit('SET_ALLPOKE', data.results);
      } catch (e) {
        // commit('notify/info', 'Erro ao carregar dados', {
        //   root: true
        // })
        console.log('Deu Ruim');
      }
    },
    async fetchInfoPokemon({ commit }, params) {
      try {
        const { data } = await api.get(`pokemon/${params}`);
        console.log('data', data);
        commit('SET_POKEMON', data);
      } catch (e) {
        // commit('notify/info', 'Erro ao carregar dados', {
        //   root: true
        // })
        console.log('Deu Ruim');
      }
    },
  },
  modules: {},
});
