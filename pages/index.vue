<template>
	<div>
		<h1>Gotta Catch 'Em All!</h1>
		<PokemonList />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { pokemons } from '@/store';

export default Vue.extend({
	name: 'IndexPage',
	async asyncData() {
		await pokemons.allPokemon();
	}
});
</script>
