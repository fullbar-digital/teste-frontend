<template>
	<div>
		{{ pokemon.name }}
	</div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Pokemon } from '@/models';

export default Vue.extend({
	props: {
		pokemon: {
			type: Object,
			required: true
		} as PropOptions<Pokemon>
	}
});
</script>

<style></style>
