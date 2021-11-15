<template>
  <div id="app">
    <header>
      <h1>PokeList</h1>
    </header>
    <section>
      <div class="typeContent">
      <div class="viewType">
          <button
            :class="['checkBtn', filters.checkType ? 'active' : '']"
            @click="changeType"
          >
            Páginas
          </button>
          <button
            :class="['checkBtn', filters.checkType ? '' : 'active']"
            @click="changeType"
          >
            Scroll
          </button>
        </div>
      </div>
      <div class="tableFilters">        
        <div class="rangeNumbers">
          <input
            type="number"
            placeholder="Nº inicial"
            min="0"
            :max="filters.finishId"
            step="1"
            @blur="rangeValidator"
            v-model="filters.startId"
          />
          <span>à</span>
          <input
            type="number"
            placeholder="Nº Final"
            :min="filters.startId"
            step="0"
            @blur="rangeValidator"
            v-model="filters.finishId"
          />
        </div>        

        <button class="btnFilter" @click="submitFilters">Filtrar</button>
        <button class="btnClean" @click="cleanFilters">Limpar</button>
      </div>

      <div class="pokeList">
        <div
          class="pokemon"
          v-for="(item, index) in pokemonList"
          :key="index"
          @click="selectPokemon(item)"
        >
        <div class="type" v-if="item.data">
            <span
              v-for="(x, i) in item.data.types"
              :key="i"
              class="types"
              >{{ x.type.name }}
            </span>
          </div>
          <img
            :src="item.image"
            :alt="'imagem sprite do pokemon ' + item.name"
          />
          <div class="pokeId"># {{ item.id }}</div>
          <h2>{{ item.name }}</h2>          
        </div>
      </div>

      <div class="paginationContent" v-if="filters.checkType">
        <div class="pagination">
          <button
            :class="[
              'pag',
              item.active ? 'active' : '',
              item.disabled ? 'dots' : '',
            ]"
            :disabled="item.disabled ? true : false"
            v-for="(item, index) in this.pagination"
            :key="index"
            @click="changePage(item.value)"
          >
            {{ item.text }}
          </button>
        </div>

        <div class="qtdContent">
          <label>Mostrar: </label>
          <select class="qtdPage" v-model="filters.qtdPage" @change="changeQtd">
            <option
              v-for="(item, index) in pageOptions"
              :key="index"
              :value="item.value"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
    </section>

    <div class="modalDetails" v-if="detailsModal">
      <div class="modal">
        <div class="modalHeader">
          <button class="close" @click="closeModal"></button>
          <div class="modalTitle">
            <h2># {{ selectedPokemon.id }}</h2>
            <h1>{{ selectedPokemon.name }}</h1>
            <span
              v-for="(item, index) in selectedPokemon.data.types"
              :key="index"
              class="types"
              >{{ item.type.name }}
            </span>
          </div>          
        </div>
        <div class="modalBody">
          <div class="firstSection">
            <img
              :src="selectedPokemon.image"
              :alt="'imagem sprite do pokemon ' + selectedPokemon.name"
            />
            <div class="pokeStats">
              <div class="baseExp">
                <label>Exp base: </label>
                <span>{{ selectedPokemon.data.base_experience }}</span>
              </div>

              <div
                class="status"
                v-for="(item, index) in selectedPokemon.data.stats"
                :key="index"
              >
                <label>{{ item.stat.name }}</label>
                <div class="progressBar">
                  <div class="bar" :style="'width:' + item.base_stat + '%'">
                    <span>{{ item.base_stat }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="secondSection">
            <div class="abilities">
              <label>Habilidades:</label>
              <div class="abilitiesList">
                <span
                  v-for="(item, index) in selectedPokemon.data.abilities"
                  :key="index"
                >
                  {{ item.ability.name }}
                </span>
              </div>
            </div>

            <div class="moves">
              <label>Movimentos:</label>
              <div class="movesList">
                <span
                  v-for="(item, index) in selectedPokemon.data.moves"
                  :key="index"
                >
                  {{ item.move.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pokemons from "./services/pokeList.module";

export default {
  name: "App",
  data() {
    return {
      filters: {
        checkType: true,
        startId: null,
        finishId: null,
        page: 0,
        qtdPage: 10,
        scrollableQtd: 30,
        muchPages: 0,
      },

      pageOptions: [
        { name: 10, value: 10 },
        { name: 20, value: 20 },
        { name: 30, value: 30 },
      ],

      pagination: [],

      detailsModal: false,

      pokemonList: [],
      selectedPokemon: null,
    };
  },

  created() {
    this.getPokemonList();    
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll",  (e) => {
        this.onscroll(e);
      });
    });
  },

  methods: {
    changeType() {
      this.filters.checkType = !this.filters.checkType;

      if(this.filters.checkType){
        this.filters.page = 0;
      }

      this.pokemonList = [];
      this.getPokemonList();
    },

    rangeValidator() {
      if (
        this.filters.finishId &&
        parseInt(this.filters.startId) > parseInt(this.filters.finishId)
      )
        this.filters.startId = this.filters.finishId;

      if (
        this.filters.startId &&
        parseInt(this.filters.finishId) < parseInt(this.filters.startId)
      )
        this.filters.finishId = this.filters.startId;
    },

    submitFilters(){
      this.pokemonList = [];
      this.getPokemonList();
    },

    cleanFilters() {
      this.filters.startId = null;
      this.filters.finishId = null;
      this.filters.page = 0;
      this.filters.qtdPage = 10;

      this.getPokemonList();
    },

    getPokemonList() {
      let qtdToShow = this.filters.checkType ? this.filters.qtdPage : this.filters.scrollableQtd;      

      let params = {
        page: this.filters.page,
        qtdPage: qtdToShow,
        start: this.filters.startId ? this.filters.startId -1 : null,
        finish: this.filters.finishId
      };

      if(!this.filters.checkType && params.start){    
        params.start = params.page > 0 ? params.start +30 : params.start;
      }

      Pokemons.pokemonList(params).then((res) => {
        res.results.filter((x) => {
          x.id = x.url.split("/")[x.url.split("/").length - 2];
          x.image = "";
        });
        if (this.filters.checkType) {
          this.pokemonList = res.results;

          this.filters.muchPages = Math.ceil(res.count / this.filters.qtdPage);
          this.genPages();
          this.getPokeSprite();
        } else {
          Promise.all(
            res.results.map((x) => {
              this.pokemonList.push(x);
            })
          ).then(() => {
            this.getPokeSprite();
          });
        }
      });
    },

    genPages() {
      this.pagination = [];
      this.pagination.push({
        text: "<",
        value: "<",
        active: false,
      });

      let proportion = this.filters.muchPages - this.filters.page;
      let middle = false;

      for (let i = 0; i < this.filters.muchPages; i++) {
        if (proportion > this.filters.muchPages / 2) {
          if (
            (i >= this.filters.page - 1 && i <= this.filters.page + 1) ||
            (this.filters.page == 0 && i < this.filters.page + 3) ||
            i >= this.filters.muchPages - 3
          ) {
            if (i >= this.filters.muchPages - 3 && !middle) {
              this.pagination.push({
                text: "...",
                value: "...",
                active: false,
                disabled: true,
              });
              middle = true;
            }

            this.pagination.push({
              text: i + 1,
              value: i,
              active: this.filters.page == i,
            });
          }
        } else {
          if (
            (i >= this.filters.page - 1 && i <= this.filters.page + 1) ||
            (this.filters.page == this.filters.muchPages - 1 &&
              i >= this.filters.muchPages - 3) ||
            i < 3
          ) {
            if (
              !middle &&
              ((i >= this.filters.page - 1 && i <= this.filters.page + 1) ||
                (this.filters.page == this.filters.muchPages - 1 &&
                  i >= this.filters.muchPages - 3))
            ) {
              this.pagination.push({
                text: "...",
                value: "...",
                active: false,
                disabled: true,
              });
              middle = true;
            }

            this.pagination.push({
              text: i + 1,
              value: i,
              active: this.filters.page == i,
            });
          }
        }
      }
      this.pagination.push({
        text: ">",
        value: ">",
        active: false,
      });
    },

    changePage(page) {
      let value = this.filters.page;

      if (page == ">" && this.filters.page < this.filters.muchPages - 1)
        value = this.filters.page + 1;
      else if (page == "<" && this.filters.page > 0)
        value = this.filters.page - 1;
      else if (typeof page == "number") value = page;

      if (value != this.filters.page) {
        this.filters.page = value;
        this.getPokemonList();
      }
    },

    changeQtd() {
      this.filters.page = 0;
      this.getPokemonList();
    },

    getPokeSprite() {
      this.pokemonList.filter((x) => {
        Pokemons.pokemonById(x.id).then((res) => {
          x.image = res.sprites.front_default;
          x.data = res;
        });
      });
    },

    selectPokemon(item) {
      this.detailsModal = true;
      this.selectedPokemon = item;
      document.body.style.overflow = 'hidden';
    },

    closeModal(){
      this.detailsModal = false;
      document.body.style.overflow = 'unset';
    },

    onscroll() {

      if(!this.filters.checkType){
        let height = document.body.clientHeight - 100;
        let scroll = window.scrollY + window.innerHeight;    
              
        if (scroll >= height) {
          this.filters.page = this.filters.page + 1;
          this.getPokemonList();
        }
      }
    },
  },
};
</script>

<style scoped>
@import url(content/CSS/style.css);
</style>
