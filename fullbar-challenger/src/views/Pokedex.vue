<template>
	<main>
		<div>
			<!-- Mostra o Título -->
			<em><h1 id="title" class="poppins block text-center text-white pt-2 mb-3">POKEDEX {{ fase }}</h1></em>
			
			<!-- Div com os campos de Seleção e Busca -->
			<div id="search" class="mb-7 text-center">
				
				<div id="show" class="block mb-5">
					<p class="text-white inline">Exibindo do pokemon </p>
					<input type="text" class="inline w-12 text-center" v-model="firstPokemon" @blur="firstFieldValidation()">
					<p class="text-white inline"> até o </p>
					<input id="last" type="text" class="inline w-12 text-center" v-model="lastPokemon" @blur="handlePokemons" @keypress.enter="handlePokemons">
					<p class="text-white inline">. (Max.: 898)</p>
				</div>

				<div id="charge" class="block my-5">
					<p class="text-white inline">Quantos pokemons carregar por vez? </p>
					<select id="charged" class="ml-2 p-0.5 inline bg-white border w-28 rounded-md text-center" name="">
						<option value="12">12</option>
						<option value="24">24</option>
						<option value="36">36</option>
					</select>
				</div>

				<div id="choose" class="block my-5">
					<p class="text-white inline">Selecione para ver todos os Pokemons de uma fase expecífica: </p>
					<select id="generation" class="ml-2 p-0.5 inline bg-white border w-28 rounded-md text-center" name="" @change="generationSelect()">
						<option value="0">---</option>
						<option value="1">Fase 1</option>
						<option value="2">Fase 2</option>
						<option value="3">Fase 3</option>
						<option value="4">Fase 4</option>
						<option value="5">Fase 5</option>
						<option value="6">Fase 6</option>
						<option value="7">Fase 7</option>
						<option value="8">Fase 8</option>
						<option value="10">Várias</option>
					</select>
				</div>

				<span class="p-input-icon-left">
					<i class="pi pi-search" />
					<InputText class="p-input" type="text" v-model="search" placeholder="Escolha a Fase e digite o nome" @keypress.enter="toSearch()"/>
				</span>
				<Button class="p-button-secondary p-button-rounded p-button-lg" label="Buscar" icon="pi pi-check" iconPos="left" @click="toSearch()"/>
				<Button id="all" class="p-button-secondary p-button-rounded p-button-lg" label="Ver Todos" icon="pi pi-check" iconPos="left" @click="showAll()" style="margin-left: 10px; display: none"/>
				
			</div>
			
		</div>
		
		<!-- Div que mostra os Cards dos Pokemons -->
		<div id="pokedex" class="mb-6">
			<!-- Section que acomoda o componente Pokemon -->
			<section class="m-auto" v-for="(pokemon) in filteredPokemons" :key="pokemon.url">
				<Pokemon :name="pokemon.name" :url="pokemon.url" :id="pokemon.url.slice(34).replace('/', '')" />
			</section>
		</div>

		<!-- Componente que proporciona o Scroll Infinito -->
		<infinite-loading @infinite="handlePokemons"></infinite-loading>
	</main>
	
</template>

<script>
import * as PokeService from '@/services/PokeService';
import Pokemon from '../components/Pokemon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InfiniteLoading from 'vue-infinite-loading';

export default {
	name: 'Pokedex',

	components: {
		Pokemon,
		InputText,
		Button,
		InfiniteLoading
	},

	data() {
		return {
			pokemons: [],
			filteredPokemons: [],
			fase: '',
			firstPokemon: '1',
			lastPokemon: '12',
			search: '',
		}
	},

	methods: {
		// Método que valida o campo de início de amostragem de pokemons
		firstFieldValidation() {
			if(parseInt(this.firstPokemon) < 1){
				alert('Este campo não pode ter valores menores que 1')
				this.firstPokemon = '1'
			}
		},

		// Método principal que chama a API
		handlePokemons($state) {
			let generationSelect = document.querySelector('#generation')
			let chargeSelect = document.querySelector('#charged')
			let lastPokemonField = document.querySelector('#last')
			let firstPokemonNumber = parseInt(this.firstPokemon)
			let lastPokemonNumber = parseInt(this.lastPokemon)
			let totalPokemons = lastPokemonNumber - firstPokemonNumber

			if(lastPokemonNumber <= 24) {
				this.fase = ''
				generationSelect.value = '0'
			} else if(firstPokemonNumber >= 1 && firstPokemonNumber <= 151 && lastPokemonNumber <= 151) {
				this.fase = 'Geração 1'
				generationSelect.value = '1'
			} else if(firstPokemonNumber >= 152 && firstPokemonNumber <= 251 && lastPokemonNumber >= 152 && lastPokemonNumber <= 251) {
				this.fase = 'Geração 2'
				generationSelect.value = '2'
			} else if(firstPokemonNumber >= 252 && firstPokemonNumber <= 386 && lastPokemonNumber >= 252 && lastPokemonNumber <= 386) {
				this.fase = 'Geração 3'
				generationSelect.value = '3'
			} else if(firstPokemonNumber >= 387 && firstPokemonNumber <= 493 && lastPokemonNumber >= 387 && lastPokemonNumber <= 493) {
				this.fase = 'Geração 4'
				generationSelect.value = '4'
			} else if(firstPokemonNumber >= 494 && firstPokemonNumber <= 649 && lastPokemonNumber >= 494 && lastPokemonNumber <= 649) {
				this.fase = 'Geração 5'
				generationSelect.value = '5'
			} else if(firstPokemonNumber >= 650 && firstPokemonNumber <= 721 && lastPokemonNumber >= 650 && lastPokemonNumber <= 721) {
				this.fase = 'Geração 6'
				generationSelect.value = '6'
			} else if(firstPokemonNumber >= 722 && firstPokemonNumber <= 809 && lastPokemonNumber >= 722 && lastPokemonNumber <= 809) {
				this.fase = 'Geração 7'
				generationSelect.value = '7'
			} else if(firstPokemonNumber >= 810 && firstPokemonNumber <= 898 && lastPokemonNumber >= 810 && lastPokemonNumber <= 898) {
				this.fase = 'Geração 8'
				generationSelect.value = '8'
			} else {
				this.fase = 'Múltiplas Gerações Selecionadas'
				generationSelect.value = '10'
			}

			if(lastPokemonNumber < 1 || lastPokemonNumber > 898) {
				alert('O segundo campo de exibição deve estar entre 1 e 898')
				generationSelect.value = '1'
				this.firstPokemon = '1'
				this.lastPokemon = '151'
				lastPokemonField.focus()
			} else if(lastPokemonNumber < firstPokemonNumber) {
				alert('O segundo campo de exibição não pode ser menor que o primeiro')
				generationSelect.value = '1'
				this.firstPokemon = '1'
				this.lastPokemon = '151'
				lastPokemonField.focus()	
			} else if(totalPokemons > 499) {
				alert('Pesquise, no máximo, 500 pokemons por vez')	
			} else {
				let firstPokemonConsult = firstPokemonNumber - 1
				let lastPokemonConsult = lastPokemonNumber - firstPokemonConsult

				PokeService.getPokemons(firstPokemonConsult, lastPokemonConsult).then(res => {
					if(res.data.results.length) {
						this.pokemons = res.data.results
						this.filteredPokemons = res.data.results
						$state.loaded()
						lastPokemonConsult = lastPokemonConsult + firstPokemonConsult + parseInt(chargeSelect.value)
						this.lastPokemon = lastPokemonConsult.toString()
					} else {
						$state.complete()
					}					
				})
			}
		},

		// Método que inputa os pokemons corretos após a seleção da geração
		generationSelect() {
			let generationSelect = document.querySelector('#generation')

			if(generationSelect.value == 1) {
				this.fase = 'Geração 1'
				this.firstPokemon = '1'
				this.lastPokemon = '151'
			} else if(generationSelect.value == 2) {
				this.fase = 'Geração 2'
				this.firstPokemon = '152'
				this.lastPokemon = '251'
			} else if(generationSelect.value == 3) {
				this.fase = 'Geração 3'
				this.firstPokemon = '252'
				this.lastPokemon = '386'
			} else if(generationSelect.value == 4) {
				this.fase = 'Geração 4'
				this.firstPokemon = '387'
				this.lastPokemon = '493'
			} else if(generationSelect.value == 5) {
				this.fase = 'Geração 5'
				this.firstPokemon = '494'
				this.lastPokemon = '649'
			} else if(generationSelect.value == 6) {
				this.fase = 'Geração 6'
				this.firstPokemon = '650'
				this.lastPokemon = '721'
			} else if(generationSelect.value == 7) {
				this.fase = 'Geração 7'
				this.firstPokemon = '722'
				this.lastPokemon = '809'
			} else if(generationSelect.value == 8) {
				this.fase = 'Geração 8'
				this.firstPokemon = '810'
				this.lastPokemon = '898'
			} else {
				alert('Selecione uma opção válida.')
				generationSelect.value = '1'
				this.firstPokemon = '1'
				this.lastPokemon = '151'
			}

			this.handlePokemons()

		},

		// Método de Busca
		toSearch() {
			let divPokedex = document.querySelector('#pokedex')
			let divShow= document.querySelector('#show')
			let divChoose= document.querySelector('#choose')
			let divCharge= document.querySelector('#charge')
			let btnAll = document.querySelector('#all')

			if(this.search === '' || this.search === ' ' || this.search === null || this.search === undefined) {
                this.filteredPokemons = this.pokemons
				divPokedex.removeAttribute('style')
				divShow.removeAttribute('style')
				divChoose.removeAttribute('style')
				divCharge.removeAttribute('style')
				btnAll.removeAttribute('style')
				btnAll.setAttribute('style', 'margin-left: 10px; display: none')
            } else {
                this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.search.toLowerCase()))
				divPokedex.setAttribute('style', 'grid-template-columns: repeat(1, minmax(0, 1fr));')
				divShow.setAttribute('style', 'display: none;')
				divChoose.setAttribute('style', 'display: none;')
				divCharge.setAttribute('style', 'display: none;')
				btnAll.removeAttribute('style')
				btnAll.setAttribute('style', 'margin-left: 10px;')
				this.search = ''
            }
		},

		// Método que volta a mostrar todos os pokemons após uma busca
		showAll() {
			let divPokedex = document.querySelector('#pokedex')
			let divShow= document.querySelector('#show')
			let divChoose= document.querySelector('#choose')
			let divCharge= document.querySelector('#charge')
			let btnAll = document.querySelector('#all')
			let inputSearch = document.querySelector('.p-input')

			if(this.search === '' || this.search === ' ' || this.search === null || this.search === undefined) {
                this.filteredPokemons = this.pokemons
				divPokedex.removeAttribute('style')
				divShow.removeAttribute('style')
				divChoose.removeAttribute('style')
				divCharge.removeAttribute('style')
				btnAll.removeAttribute('style')
				btnAll.setAttribute('style', 'margin-left: 10px; display: none')
            } else {
				this.search = ''
				inputSearch.focus()
				alert('Para ver todos os pokemons, esvazie o campo de busca!')
            }
		}
	}

	// Seria usada a propriedade computada caso não precisasse de um botão de filtro
	// computed: {
    //     searchResult: function() {
    //         if(this.search === '' || this.search === ' ' || this.search === null || this.search === undefined) {
    //             return this.pokemons
    //         } else {
    //             return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.search.toLowerCase()))
    //         }
    //     }
    // }
}
</script>

<style lang="scss" scoped>

	main {
		background-color: #0d101a;
	}

	input.p-inputtext {
		width: 120%;
	}

	.p-button:focus {
		outline: none;
	}

	#pokedex {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		grid-auto-flow: row;	
	}

	#title {
		font-size: 3.75rem/* 60px */;
	}

	// Resposividade
	@media (max-width: 1300px) {
		#pokedex{
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
		#title {
			font-size: 3rem/* 48px */;
		}
	}

	@media (max-width: 950px) {
		#pokedex{
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		#title {
			font-size: 2.25rem/* 36px */;
			line-height: 2.5rem/* 40px */;
		}
	}

	@media (max-width: 650px) {
		#pokedex{
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
		#title{
			font-size: 1.875rem/* 30px */;
			line-height: 2.25rem/* 36px */;
		}
		#choose {
			font-size: 0.75rem/* 12px */;
			line-height: 1rem/* 16px */;
		}
		#show {
			font-size: 0.75rem/* 12px */;
			line-height: 1rem/* 16px */;
		}
		.p-button {
			margin-top: 10px;
		}
		input.p-inputtext {
			width: 100%;
		}
	}
</style>
