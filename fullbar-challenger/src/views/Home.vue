<template>

	<main class="home flex">
		<div class="m-auto">
			<router-link to="/pokedex">
				<Button class="p-button-help p-button-rounded p-button-lg" label="Pokedex" icon="pi pi-check" iconPos="left" />
			</router-link>
		</div>

		<figure id="image" class="my-auto">
			<img alt="pikachu" src="../assets/media/logo.png">
		</figure>
	</main>

</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'Home',
  components: {
    Button,
  }
}
</script>

<style scoped>
.home{
  background-image: linear-gradient(to bottom right, orange, red);
  height: 100vh;
  width: 100vw;
}

#image {
  width: 50%;
  height: 100%;
}

</style>
