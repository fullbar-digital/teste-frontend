import state from './state';

export default {
	updateOffset() {
		state.offset += state.limit;
	},
	setList(list) {
		state.list.push(...list);
		state.tmpList.push(...list);
	},
	setListHasNext(flag) {
		state.listHasNext = flag;
	},
	setListHasCompleted(flag) {
		state.listHasCompleted = flag;
	},
	setListHasError(flag) {
		state.listHasError = flag;
	},
	resetList() {
		state.list = [...state.tmpList];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
		state.pokemonId = null;
	},

	setPokemonSearched(pokemon) {
		state.list = [pokemon];
	},
	setIsSearching(flag) {
		state.isSearching = flag;
	},
	setIsPokemonSearch(flag) {
		state.isPokemonSearch = flag;
	},
	setSearchHasError(flag) {
		state.searchHasError = flag;
	},
	setPokemonId(id = null){
		state.isPokemonSearch = false;
		state.pokemonId = id;
	}
};