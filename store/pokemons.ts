import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { Pokemon } from '@/models';
import { $axios } from '@/utils/api';

@Module({ name: 'pokemons', stateFactory: true, namespaced: true })
export default class Pokemons extends VuexModule {
	private pokemons = [] as Pokemon[];
	private pokemon = {} as Pokemon;

	public get $all() {
		return this.pokemons;
	}

	public get $single() {
		return this.pokemon;
	}

	@Mutation
	private SET_ALL(pokemons: Pokemon[]) {
		this.pokemons = pokemons;
	}

	@Mutation
	private SET_SINGLE(pokemon: Pokemon) {
		this.pokemon = pokemon;
	}

	@Action
	public async allPokemon() {
		const pokemons = await $axios.$get(`/pokemon`);
		this.context.commit('SET_ALL', pokemons);
	}

	@Action
	public async singlePokemon(name: string) {
		const pokemon = await $axios.$get(`/pokemon/${name}`);
		// console.log(pokemon);
		this.context.commit('SET_SINGLE', pokemon);
	}
}
