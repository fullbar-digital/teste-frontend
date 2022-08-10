<template>
	<li class="types__item" :style="$colorType">
		<span>{{ pokemon.type.name }}</span>
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
		$colorType(): string {
			return `--color-type: var(--color-${this.pokemon.type.name})`;
		}
	}
});
</script>

<style lang="scss" scoped>
.types__item {
	background-color: hsla(var(--color-type), 1);
	color: hsla(var(--color-white), 1);
	padding: 0.25rem 0.5rem;
	border-radius: 1rem;
}
</style>
