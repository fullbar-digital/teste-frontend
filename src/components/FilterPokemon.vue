<template>
  <v-form>
    <v-text-field label="Número Inicial" v-model="initialPokemon">
    </v-text-field>
    <v-text-field label="Número Final" v-model="finalPokemon"></v-text-field>
    <v-select
      v-model="itemsPerPage"
      :items="items"
      label="Pokémons por página"
    ></v-select>
    <v-select :items="visualization" label="Visualização"></v-select>
    <v-btn elevation="2" rounded class="btn_filter" @click="setFilter"
      >Filtrar</v-btn
    >
  </v-form>
</template>

<script>
// import api from "../../api/api";

export default {
  name: "FilterPokemon",
  props: {},

  data() {
    return {
      items: [10, 20, 30],
      itemsPerPage: 10,
      initialPokemon: 1,
      finalPokemon: 10220,
      visualization: ["Paginação", "Scroll"]
    };
  },

  methods: {
    setInitialPokemon() {
      this.$emit("setInitialPokemon", this.initialPokemon);
    },
    setFinalPokemon() {
      this.$emit("setFinalPokemon", this.finalPokemon);
    },
    setItemsPerPage() {
      this.$emit("setItemsPerPage", this.itemsPerPage);
    },
    setFilter() {
      this.setInitialPokemon();
      this.setFinalPokemon();
      this.setItemsPerPage();
    }
  },

  mounted() {}
};
</script>

<style>
.form {
  display: flex;
}
.form {
  background-color: white;
  padding: 10px 20px;
  border-radius: 15px;
  align-items: center;
}
.form .v-input {
  margin: 20px 20px 0px 20px;
}
.btn_filter {
  background-color: red !important;
  color: yellow !important;
}
</style>
