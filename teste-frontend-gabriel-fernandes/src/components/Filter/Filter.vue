<template>
  <div class="container-filter">
    <div>
      <input v-model.number="this.initial" type="Number" placeholder="Inicio" />
    </div>
    <div>
      <input v-model.number="this.final" type="Number" placeholder="Fim" />
    </div>
    <div>
      <button v-on:click="this.filter">Filtrar</button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    initial: 0,
    final: 0,
  }),
  methods: {
    async filter() {
      this.$store.commit('SET_NUMBER_INITIAL', this.initial);
      this.$store.commit('SET_NUMBER_FINAL', this.final);
      await this.$store.dispatch('fetchAllPokemons');
    },
  },
};
</script>
<style src="./Style.scss" lang="scss" scoped></style>
