<template>
	<div>
		<PokemonCard
			v-for="pokemon in $pokemons.results"
			:key="pokemon.name"
			:pokemon="pokemon"
		/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { pokemons } from '@/store';

export default Vue.extend({
	computed: {
		$pokemons() {
			return pokemons.$all;
		}
	}
});
</script>

<style scoped></style>
