import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    de: 5,
    ate:40,
    itemsPerPage: 10,
    typePagination: 'Fluido',
    totalOfItens: 0,
  },
  getters: {

    numberToGet(state) {
      return state.ate - state.de // quantidade de itens a serem exibidos
    },
    quantidadePaginas(state) {
      return Math.ceil(state.ate / state.itemsPerPage)
    }
  },
  mutations: {

    setNumberOfItemsDe(state, payload) {
      state.de = payload;
    },

    setNumberOfItemsAte(state, payload) {
      state.ate = payload;
    },

    setItemsPerPage(state, payload) {
      state.itemsPerPage = payload;
    },

    setTypePagination(state, payload) {
      state.typePagination = payload;
    },
    setTotalOfItens(state, payload){
      
      state.setTotalOfItens = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
