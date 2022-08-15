<template>
  <div class="">
    <h3>Tipo de Páginação</h3>
    <select v-model="setData" class="select-css">
      <option v-for="(tipos) in tipo" :key='tipos'>
        <option>{{tipos}}</option>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
    };
  },
  props: {
    tipo: { type: Array },
  },
  computed: {

    nameOfField() {
      return this.tipo[0] === "Paginado"
        ? "Tipo de Paginação"
        : "Quantidade de itens";
    },

    setData: {
      
      get() {
        return this.$store.state.typePagination;
      },

      set(setData) {
        this.$store.commit("setTypePagination", setData);    
      },

    },
  },
};
</script>
<style src="./Style.scss" lang="scss" scoped/>

