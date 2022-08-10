<template>
	<div class="container">
		<slot />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.container {
	--container-width: 82.5rem;

	width: 100%;
	max-width: var(--container-width);
	margin: 0 auto;
	padding: 0 1rem;
}
</style>
