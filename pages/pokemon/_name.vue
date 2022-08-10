<template>
	<PokemonSingle />
</template>

<script lang="ts">
import Vue from 'vue';
import { pokemons } from '@/store';

export default Vue.extend({
	async asyncData({ params }) {
		await pokemons.singlePokemon(params.name);
	}
});
</script>
