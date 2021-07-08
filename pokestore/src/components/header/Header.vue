<template>
  <div class="">
    <Nav />
    <div class="header">
      <div class="header-content">
        <NumberOfItems class="numberOfItens" />
        <NumberPerPage class="numberPerPage" :tipo="itemsperpage" />
        <TypePagination class="typePagination" :tipo="tipo" />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../nav/Nav.vue";
import NumberOfItems from "../numberOfItems/NumberOfItems";
import NumberPerPage from "../numberPerPage/NumberPerPage";
import TypePagination from "../typePagination/typePagination";

export default {
  components: {
    Nav,
    NumberOfItems,
    NumberPerPage,
    TypePagination,
  },
  data: () => ({
    itemsperpage: [10, 20, 30],
    tipo: ["Paginado", "Fluido"],
  }),

  methods: {},
};
</script>

<style src="./Style.scss" lang="scss" scoped/>
