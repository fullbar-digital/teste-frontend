<template>
	<section>
		<Container>
			<img
				class="thumbnail"
				:src="$pokemonThumb"
				:alt="$pokemon.name"
				loading="lazy"
			/>

			<div class="card">
				<h1>#{{ $pokemon.id }} {{ $pokemonName }}</h1>

				<ul class="types">
					<PokemonTypes
						v-for="(pokemon, index) in $pokemon.types"
						:key="index"
						:pokemon="pokemon"
					/>
				</ul>

				<h2>Stats</h2>
				<ul class="stats">
					<PokemonStats
						v-for="(pokemon, index) in $pokemon.stats"
						:key="index"
						:pokemon="pokemon"
					/>
				</ul>

				<NuxtLink class="back" to="/">Go back</NuxtLink>
			</div>
		</Container>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { pokemons } from '@/store';

export default Vue.extend({
	head() {
		return {
			title: `${this.$pokemonName} | Pokédex`,
			bodyAttrs: {
				class: 'type',
				style: this.$pokemonType
			}
		};
	},

	computed: {
		$pokemon() {
			return pokemons.$single;
		},

		$pokemonName(): string {
			const pokemonName: string = this.$pokemon.name;
			return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
		},
		$pokemonType(): string {
			const pokemonType: string = this.$pokemon.types[0].type.name;

			return `--color-type: var(--color-${pokemonType})`;
		},
		$pokemonThumb(): string {
			return this.$pokemon.sprites.other['official-artwork']
				.front_default;
		}
	}
});
</script>

<style lang="scss" scoped>
.container {
	--container-width: 50rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.thumbnail {
	width: 15rem;
	transform: translateY(4rem);
	filter: drop-shadow(10px -3px 4px hsla(var(--color-black), 0.3));
}

.card {
	background-color: hsla(var(--color-white), 1);
	padding: 5rem 1rem 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1.5rem;
	border-radius: 2rem;
	width: 100%;
	max-width: 25rem;
	box-shadow: 3px 3px 5px 0 hsla(var(--color-black), 0.3);
}

.types {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
}

.stats {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 15rem;
	gap: 1.5rem;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
	opacity: 0;
}

.back {
	color: hsla(var(--color-black), 1);
	border: 1px solid hsla(var(--color-black), 1);
	padding: 0.25rem 1rem;
	border-radius: 1rem;
	transition: 144ms;

	&:hover {
		color: hsla(var(--color-white), 1);
		background-color: hsla(var(--color-black), 1);
	}
}
</style>
