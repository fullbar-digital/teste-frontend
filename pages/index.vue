<template>
	<section class="home">
		<Container>
			<PokemonList />
		</Container>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { pokemons } from '@/store';

export default Vue.extend({
	async asyncData() {
		await pokemons.allPokemon();
	}
});
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
}
</style>
