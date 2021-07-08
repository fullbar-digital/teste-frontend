<template>
  <div class="">
    <select v-model.number="setDate" type="number" class="select-css">
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

    setDate: {
      get() {
        return this.$store.state.itemsPerPage;
      },

      set(setDate) {
        this.$store.commit("setItemsPerPage", setDate);
      },
    },
  },
};
</script>
<style src="./Style.scss" lang="scss" scoped/>

