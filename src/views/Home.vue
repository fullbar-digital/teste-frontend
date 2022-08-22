<template>
  <div>
    <img class="image" src="../assets/Pokemon-Logo.png" />
  </div>
  <div><Filter /></div>
  <div class="home">
     <Card
      :number="index"
      :itens="pokemon"
      v-for="(pokemon, index) in this.$store.state.allPoke"
      :key="index"
    />
  </div>
</template>

<script>
import Card from '@/components/Card/Card.vue';
import Filter from '@/components/Filter/Filter.vue';


export default {
  name: 'Home',
  components: {
    Card,
    Filter,
  },
  data: () => ({
    count: 0,
  }),
  beforeMount() {
    this.init();
  },
  methods: {
    async init() {
      await this.$store.dispatch('fetchAllPokemons');
    },
  },
};
</script>
<style src="./Style.scss" lang="scss" scoped></style>
