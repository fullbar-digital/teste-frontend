<template>
  <div class="card">
    <div class="flip-container">
      <div class="flipper" v-if="show">
        <div class="front">
          <div class="pokemon-card" v-bind:class="color">
            <img class="pokemon" :src="pokemon.url" alt="" />
            <h5 class="poke-id">#{{ pokemon.id }}</h5>
            <h1 class="poke-name">{{ itens.name }}</h1>
            <div class="poke-type">
              <h3>{{ pokemon.type[0].type.name }}</h3>
              <h3 v-if="pokemon.type[1]">/{{ pokemon.type[1].type.name }}</h3>
            </div>
          </div>
        </div>
        <div class="back">
          <div class="pokemon-card">
            <div class="pokemon-card-content">
              <h5>HP : {{ pokemon.hp.base_stat }}</h5>
              <h5>Attack : {{ pokemon.attack.base_stat }}</h5>
              <h5>Defense : {{ pokemon.defense.base_stat }}</h5>
              <h5>SpecialAttack : {{ pokemon.specialAttack.base_stat }}</h5>
              <h5>SpecialDefense : {{ pokemon.specialDefense.base_stat }}</h5>
              <h5>Speed : {{ pokemon.speed.base_stat }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="setPosition" v-observe-visibility="visibilityChanged"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    pokemon: {},
    type: [],
    show: false,
    status: false,
    isActive: false,
    color: {
      grass: false,
      poison: false,
      fire: false,
      flying: false,
      wate: false,
      bug: false,
      normal: false,
      electric: false,
      ground: false,
      fighting: false,
      psychic: false,
      rock: false,
      fairy: false,
      steel: false,
      ice: false,
      ghost: false,
      dragon: false,
    },
    count: 0,
  }),
  props: {
    itens: { type: Object },
    number: Number,
  },
  computed: {
    de() {
      return this.$store.state.de;
    },
    ate() {
      return this.$store.state.ate;
    },
  },
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible && this.status == false) {
        this.status = true;
        this.getPokemonInfo();
      } else {
        return;
      }
    },
    async getPokemonInfo() {
      let att = this.$store.state.de === 0 ? 1 : this.$store.state.de + 1;

      if (this.$store.state.typePagination === "Paginado") {
        this.count = att + this.number;
      } else {
        this.count = this.number + att;
      }
      await this.$http.get(`pokemon/${this.count}`).then((resp) => {
        this.color = resp.data.types[0].type.name;
        this.pokemon = {
          url: resp.data.sprites.other.dream_world.front_default,
          id: resp.data.id,
          type: resp.data.types,
          hp: resp.data.stats[0],
          attack: resp.data.stats[1],
          defense: resp.data.stats[2],
          specialAttack: resp.data.stats[3],
          specialDefense: resp.data.stats[4],
          speed: resp.data.stats[5],
        };
        this.show = true;
      });
    },
  },
};
</script>

<style src="./Style.scss" lang="scss" scoped/>