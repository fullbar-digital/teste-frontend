import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Pokemons from '@/store/pokemons';

// eslint-disable-next-line import/no-mutable-exports
let pokemons: Pokemons;

function initializeStores(store: Store<any>): void {
	pokemons = getModule(Pokemons, store);
}

export { initializeStores, pokemons };
