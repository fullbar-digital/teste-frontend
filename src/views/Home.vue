<template>
  <div class="home-view-content">
    <header>
      <div class="container">
        <div>
          <Header />
        </div>
        <div class="container-filter-button">
          <a @click="getPokemons"> <FilterButton /></a>
        </div>
        <div class="container-pagination">
          <div class="pagination" v-if="typePagination !== 'Fluido'">
            <a href="#" @click="previus()">&laquo;</a>
            <a href="#" @click="next()">&raquo;</a>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="container-cards">
        <div class="container-cards-content">
          <Card
            :number="i"
            :itens="itens[i]"
            v-for="(iten, i) in itens"
            :key="iten.i"
          />
        </div>
      </div>
    </div>
    <div
      class="setPosition"
      v-if="typePagination !== 'Paginado'"
      v-observe-visibility="visibilityChanged"
    >
      .
    </div>
  </div>
</template>

<script>
import Header from "../components/header/Header";
import FilterButton from "../components/filterButton/Filter";
import NumberItems from "../components/numberOfItems/NumberOfItems";
import Card from "../components/card/Card";
import NumberPerPage from "../components/numberPerPage/NumberPerPage";

export default {
  data: () => ({
    itens: [],
    totalItens: 0,
    count: 0,
  }),

  computed: {
    ate() {
      return this.$store.state.ate;
    },
    itemsPerPage() {
      return this.$store.state.itemsPerPage;
    },
    typePagination() {
      return this.$store.state.typePagination;
    },
    numOfPage() {
      return this.$store.getters.quantidadePaginas;
    },
  },

  components: {
    FilterButton,
    Card,
    Header,
    NumberItems,
    NumberPerPage,
  },

  created() {
    this.initialize();
  },
  methods: {
    visibilityChanged(isVisible) {
      if (!isVisible) {
        return;
      }
      this.nextInfinity();
    },
    async initialize() {
      this.totalItens = this.$store.getters.numberToGet;
      this.itens = [];
      let de = parseInt(this.$store.state.de);
      let att =
        this.totalItens >= this.$store.state.itemsPerPage
          ? this.$store.state.itemsPerPage
          : this.totalItens;
      await this.$http.get(`pokemon?offset=${de}&limit=${att}`).then((resp) => {
        resp.data.results.forEach(this.extract);
      });
    },

    async getPokemons() {
      this.count = 0;
      if (this.$store.state.de < this.$store.state.ate) {
        this.totalItens = this.$store.getters.numberToGet;
        this.itens = [];
        let de = parseInt(this.$store.state.de);
        let att =
          this.totalItens >= this.$store.state.itemsPerPage
            ? this.$store.state.itemsPerPage
            : this.totalItens;
        await this.$http
          .get(`pokemon?offset=${de}&limit=${att}`)
          .then((resp) => {
            resp.data.results.forEach(this.extract);
          });
      } else {
        alert("O Numero do campo De deve ser maior que o Campo até");
      }
    },
    extract(item) {
      return this.itens.push({
        name: item.name,
        url: item.url,
      });
    },

    async next() {
      this.totalItens =
        this.$store.getters.numberToGet - this.$store.state.itemsPerPage;

      if (this.totalItens > 0) {
        let de = parseInt(
          this.$store.state.de + this.$store.state.itemsPerPage
        );
        this.$store.commit("setNumberOfItemsDe", de);

        let ate =
          this.totalItens >= this.$store.state.itemsPerPage
            ? this.$store.state.itemsPerPage
            : this.totalItens;

        this.itens = [];
        await this.$http
          .get(`pokemon?offset=${de}&limit=${ate}`)
          .then((resp) => {
            resp.data.results.forEach(this.extract);
          });
      } else {
      }
    },

    async nextInfinity() {
      if (this.totalItens - this.$store.state.itemsPerPage < 0) {
        return;
      } else {
        this.totalItens = this.totalItens - this.$store.state.itemsPerPage;
      }
      if (this.totalItens > 0) {
        if (this.$store.state.typePagination == "Fluido") {
        } else {
          this.itens = [];
        }
        if (this.totalItens / this.$store.state.itemsPerPage >= 0) {
          this.count = this.count + this.$store.state.itemsPerPage;
        } else {
        }
        let de = this.$store.state.de + this.count;
        let ate =
          this.totalItens >= this.$store.state.itemsPerPage
            ? this.$store.state.itemsPerPage
            : this.totalItens;
        await this.$http
          .get(`pokemon?offset=${de}&limit=${ate}`)
          .then((resp) => {
            resp.data.results.forEach(this.extract);
          });
      } else {
      }
    },

    async previus() {
      this.totalItens =
        this.$store.getters.numberToGet + this.$store.state.itemsPerPage;
      let de =
        this.$store.state.de >= this.$store.state.itemsPerPage
          ? this.$store.state.de - this.$store.state.itemsPerPage
          : this.$store.state.de;
      if (this.$store.state.de >= this.$store.state.itemsPerPage) {
        this.$store.commit("setNumberOfItemsDe", de);
        let ate = this.$store.state.itemsPerPage;
        this.itens = [];
        await this.$http
          .get(`pokemon?offset=${de}&limit=${ate}`)
          .then((resp) => {
            resp.data.results.forEach(this.extract);
          });
      } else {
      }
    },
  },
};
</script>

<style lang="scss" src="./Style.scss" scoped />

