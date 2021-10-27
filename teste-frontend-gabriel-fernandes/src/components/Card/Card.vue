<template>
  <div class="card">
    <div class="pokemon-card">
      <p>{{ number }}</p>
      <p>{{ itens.name }}</p>
      <div v-if="this.info">
        <img
          class="image-pokemon"
          :src="
            this.$store.state.pokemon.sprites.other.dream_world.front_default
          "
          alt=""
        />
        <p>HP : {{ this.$store.state.pokemon.stats[0].base_stat }}</p>
        <p>Attack : {{ this.$store.state.pokemon.stats[1].base_stat }}</p>
        <p>Defense : {{ this.$store.state.pokemon.stats[2].base_stat }}</p>
        <p>
          SpecialAttack : {{ this.$store.state.pokemon.stats[3].base_stat }}
        </p>
        <p>
          SpecialDefense :
          {{ this.$store.state.pokemon.stats[4].base_stat }}
        </p>
        <p>Speed : {{ this.$store.state.pokemon.stats[5].base_stat }}</p>
      </div>
      <button v-on:click="this.init">Info Pokemon</button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    info: false,
  }),
  props: {
    itens: { type: Object },
    number: Number,
  },
  methods: {
    async init() {
      let count = this.number + 1;
      await this.$store.dispatch('fetchInfoPokemon', count);
      this.info = !this.info;
    },
  },
};
</script>
<style src="./Style.scss" lang="scss" scoped></style>
