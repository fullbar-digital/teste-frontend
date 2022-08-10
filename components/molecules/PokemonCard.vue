<template>
	<li class="pokemons__item">
		<h2>{{ $pokemonName }}</h2>
		<NuxtLink class="pokemons__info" :to="`/pokemon/${pokemon.name}`"
			>More Info</NuxtLink
		>
	</li>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Pokemon } from '@/models';
import { pokemons } from '@/store';

export default Vue.extend({
	props: {
		pokemon: {
			type: Object,
			required: true
		} as PropOptions<Pokemon>
	},
	computed: {
		$pokemonName(): string {
			const pokemonName: string = this.pokemon.name;
			return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
		}
	}
});
</script>

<style lang="scss" scoped>
.pokemons__item {
	width: 8rem;
	height: 8rem;
	padding: 1rem 0.5rem;
	border-radius: 0.5rem;
	box-shadow: 3px 3px 5px 0 hsla(var(--color-black), 0.15);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1.5rem;

	h2 {
		font-size: 1rem;
	}
}

.pokemons__info {
	color: hsla(var(--color-black), 1);
	border: 1px solid hsla(var(--color-black), 1);
	font-size: 0.8rem;
	padding: 0.25rem 1rem;
	border-radius: 1rem;
	transition: 144ms;

	&:hover {
		color: hsla(var(--color-white), 1);
		background-color: hsla(var(--color-black), 1);
	}
}
</style>
