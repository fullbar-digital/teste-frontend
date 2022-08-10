<template>
	<ul class="pokemons">
		<PokemonCard
			v-for="pokemon in $pokemons.results"
			:key="pokemon.name"
			:pokemon="pokemon"
		/>
	</ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { pokemons } from '@/store';

export default Vue.extend({
	async asyncData() {
		await this.$pokemons.map(
			async (pokemon: any) => await pokemons.singlePokemon(pokemon)
		);
	},
	computed: {
		$pokemons() {
			return pokemons.$all;
		}
	}
});
</script>

<style lang="scss" scoped>
.pokemons {
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
}
</style>
