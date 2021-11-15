<template>
	<main id="pokemon">
		<!-- Início do Card -->
		<div class="card mb-9">
			<!-- Interior do Card -->
			<div class="card-inner cursor-pointer" :class="'new-class-'+id" @click="flip()">
				<!-- Card Lado Frontal -->
				<div class="card-face card-face-front block">
					<img :src="pokemon.front" loading="lazy" alt="Pokemon de Frente" class="picture-front mt-9" />
					<h2 class="w-full text-center mt-10"><strong>{{ id }} - <em>{{ name | toUpper }}</em></strong></h2>
					<p class="w-full text-center text-xs mt-2 text-gray-300">Clique para saber mais</p>
				</div>
				<!-- Card Lado Traseiro -->
				<div class="card-face card-face-back">
					<div class="card-content">
						<!-- Cabeçalho -->
						<div class="card-header">
							<img :src="pokemon.back" loading="lazy" alt="Pokemon de Costas" class="picture" />
							<h2>{{ name }}</h2>
						</div>
						<!-- Corpo -->
						<div class="card-body">
							<h3 class="arcade text-center">Extras</h3>
							<p class="digital text-base">Tipo 1: {{ pokemon.type1 }}</p>
							<p class="digital text-base">Tipo 2: {{ pokemon.type2 }}</p>                       
							<p class="digital text-base">Ataque Principal: {{ pokemon.move1 }}</p>                       
							<p class="digital text-base">Ataque Secundário: {{ pokemon.move2 }}</p>
							<p class="digital text-base">Altura: {{ pokemon.height }}m</p>
							<p class="digital text-base">Peso: {{ pokemon.weight }}Kg</p>
						</div>
					</div>
				</div>
			</div>
		</div> 
	</main>
</template>

<script>
import * as PokeService from '@/services/PokeService';

export default {
    props: {
        id: String,
        name: String,
        url: String
    },

	// Filtro Usado para colocar o nome do pokemon com a primeira letra maiúscula
    filters: {
        toUpper: (name) => {
            let newName = name[0].toUpperCase() + name.slice(1)
            return newName
        }
    }, 
    methods:{
		// Método que adiciona a classe para fazer o efeito de girar o card
        flip() {
            let card = document.querySelector(`.new-class-${this.id}`);
            
            card.classList.toggle('is-flipped');
        }
    },
    mounted() {
		// Consumo da API e atribuição dos valores do objeto às variáveis
		PokeService.getPokemon(this.id).then(res => {
			this.pokemon.type1 = res.data.types[0].type.name
			this.pokemon.type2 = res.data.types[1] ? res.data.types[1].type.name : 'Sem 2º Tipo'
			this.pokemon.front = res.data.sprites.front_default
			this.pokemon.back = res.data.sprites.back_default
			this.pokemon.move1 = res.data.moves[0] ? res.data.moves[0].move.name : 'Inexistente'
			this.pokemon.move2 = res.data.moves[1] ? res.data.moves[1].move.name : 'Inexistente'
			this.pokemon.weight = (res.data.weight / 10)
			this.pokemon.height = (res.data.height / 10)
		})
    },
    data() {
        return {
            pokemon: {
              type1: '',
              type2: '',
              front: '',
              back: '',
              move1: '',
              move2: '',
              weight: ''
            }
        }
    }
}
</script>

<style>
root {
  --primary: #FFCE00;
  --secondary: #FE4880;
  --light: #F3F3F3;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: montserrat, sans-serif;
  width: 100%;
  min-height: 100vh;
}

.card {
  width: 300px;
  height: 450px;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  position: relative;
}

.card-inner.is-flipped {
  transform: rotateY(180deg);
}


.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border: 1px solid #F3F3F3;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(131, 131, 131, 0.4);
}

.card-face-front {
  background-image: linear-gradient(to bottom right, var(--primary), var(--secondary));
}

.card-face-front h2 {
  color: #FFF;
  font-size: 32px;
  font-family: var(--poppins);
}

.card-face-back {
  background-color: var(--light);
  transform: rotateY(180deg);
}

.card-content {
  width: 100%;
  height: 100%;
}

.card-header {
  position: relative;
  padding: 20px 20px 27px;
}

.card-header:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom left, var(--primary) 10%, var(--secondary) 115%);
  z-index: -1;
  border-radius: 0px 0px 50% 0px;
}

.picture {
  display: block;
  width: 128px;
  height: 128px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background-color: #0d101a;
  border: 5px solid #FFF;
  object-fit: cover;
}

.picture-front {
  display: block;
  width: 180px;
  height: 180px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background-color: #0d101a;
  border: 5px solid #FFF;
  object-fit: cover;
}

.card-header h2 {
  color: #FFF;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}

.card-body {
  padding: 10px;
  color: green;
}

.card__body h3 {
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
}

</style>