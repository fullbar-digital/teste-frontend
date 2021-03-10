<template>
  <div class="pokedex">
    <v-app>
      <div class="filter">
        <FilterPokemon
          class="form"
          @setInitialPokemon="setInitialPokemon"
          @setFinalPokemon="setFinalPokemon"
          @setItemsPerPage="setItemsPerPage"
        />
      </div>
      <v-divider></v-divider>
      <div class="results">
        <Card
          v-for="pokemon in pageOfPokemons"
          :key="pokemon.name"
          :pokemon="pokemon"
        />
      </div>
      <div class="card-footer pb-0 pt-3">
        <jw-pagination
          :items="pokemons"
          :pageSize="itemsPerPage"
          :labels="customLabels"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
    </v-app>
  </div>
</template>

<script>
import api from "../../api/api";

const customLabels = {
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">"
};

export default {
  name: "Pokedex",
  components: {
    Card: () => import("./Card.vue"),
    FilterPokemon: () => import("./FilterPokemon.vue")
  },

  data() {
    return {
      pokemons: [],
      pageOfPokemons: [],
      initialPokemon: 1,
      finalPokemon: 10220,
      itemsPerPage: 10,
      customLabels
    };
  },

  methods: {
    setInitialPokemon(initial) {
      this.initialPokemon = initial;
    },
    setFinalPokemon(final) {
      this.finalPokemon = final;
    },
    setItemsPerPage(items) {
      this.itemsPerPage = items;
    },
    getPokemon() {
      api
        .get(
          `api/v2/pokemon/?limit=${this.finalPokemon -
            this.initialPokemon +
            1}&offset=${this.initialPokemon - 1}`
        )
        .then(({ data }) => {
          this.pokemons = [...data.results];
        });
    },
    onChangePage(pageOfItems) {
      this.pageOfPokemons = pageOfItems;
    }
  },

  mounted() {
    this.getPokemon();
  },

  watch: {
    initialPokemon() {
      this.getPokemon();
    },
    finalPokemon() {
      this.getPokemon();
    },
    itemsPerPage() {
      this.getPokemon();
    }
  }
};
</script>

<style scoped>
.v-application {
  background: none !important;
}

.pokedex {
  margin: auto;
  max-width: 90%;
}
.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pagination {
  background-color: white;
  padding: 0px !important;
  border-radius: 20px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
hr {
  margin: 20px 0 10px 0;
}
</style>
