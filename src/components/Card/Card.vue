<template>
<div class="flip-card">
  
    <div class="flip-card-inner">
      <div class="flip-card-front">
          <p>#{{number + 1}} {{ itens.name }}</p>
          <img  
              class="image-pokemon"
              :src="pokeInfo.url"
              alt=""
            />
      </div>
        <div class="flip-card-back">
          <p>HP : {{ pokeInfo.hp }}</p>
          <p>Attack : {{ pokeInfo.attack }}</p>
          <p>Defense : {{ pokeInfo.defense }}</p>
          <p>
            SpecialAttack : {{ pokeInfo.specialAttack }}
          </p>
          <p>
            SpecialDefense :
            {{ pokeInfo.specialDefense }}
          </p>
          <p>Speed : {{ pokeInfo.speed }}</p> 
        </div>
      </div>
    </div>
</template>
<script>
import api from '../../service/api';
export default {
  data: () => ({
    info: false,
    pokeInfo: {},
    spinnerControl:false
  }),
  props: {
    itens: { type: Object },
    number: Number,
  },
  created(){
    this.init()
  },
  methods: {
    async init() {
      let count = this.number + 1;
      await api.get(`pokemon/${count}`).then((resp) => {
        this.pokeInfo = {
          url: resp.data.sprites.other.dream_world.front_default,
          id: resp.data.id,
          type: resp.data.types,
          hp: resp.data.stats[0].base_stat,
          attack: resp.data.stats[1].base_stat,
          defense: resp.data.stats[2].base_stat,
          specialAttack: resp.data.stats[3].base_stat,
          specialDefense: resp.data.stats[4].base_stat,
          speed: resp.data.stats[5].base_stat,
        };
        this.info = !this.info;
        this.spinnerControl = false
      });
    },
  },
};
</script>
<style src="./Style.scss" lang="scss" scoped></style>
