<template>
	<li class="stats__item">
		<h3>{{ $statName }}</h3>
		<div class="stats__bar">
			<span>{{ pokemon.base_stat }}</span>
			<progress
				max="255"
				:value="pokemon.base_stat"
				:style="$statType"
			></progress>
		</div>
	</li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		pokemon: {
			type: Object,
			required: true
		}
	},
	computed: {
		$statName(): string {
			return this.pokemon.stat.name.replace('-', ' ');
		},
		$statType(): string {
			return `--color-stats: var(--color-${this.pokemon.stat.name})`;
		}
	}
});
</script>

<style lang="scss" scoped>
.stats__item {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	h3 {
		text-transform: uppercase;
		font-weight: 500;
		font-size: 1rem;
	}
}

.stats__bar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	progress {
		appearance: none;
		width: 80%;
		height: 0.75rem;

		&::-webkit-progress-bar {
			background-color: hsla(var(--color-stats), 0.3);
			border-radius: 0.5rem;
		}

		&::-webkit-progress-value {
			background-color: hsla(var(--color-stats), 1);
			border-radius: 0.5rem 0 0 0.5rem;
		}
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
	opacity: 0;
}
</style>
