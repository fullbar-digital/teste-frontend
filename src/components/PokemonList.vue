<template>
    <div>
        <!-- pokemon cards -->
        <ul id="infinite-list">
            <li v-for="(pokemon, index) in pokemonList" :key="index" class="pokemonCard" @click="openModal(index)">
                <!-- img with lazy load -->
                <img v-lazy="pokemon.sprites.front_default" alt="Pokemon Image">
                <span class="id">#{{ pokemon.id }}</span>
                <span class="name">{{ pokemon.name }}</span>

                <ul class="type">
                    <!-- to change color of each type -->
                    <li 
                        v-for="(item, index) in pokemon.types" 
                        :key="index" 
                        :class="{ 
                            red: item.type.name == `fighting`,
                            green: item.type.name == `grass`,
                            yellow: item.type.name == `ground`,
                            orange: item.type.name == `fire`,
                            blue: item.type.name == `water`,
                            purple: item.type.name == `steel`,
                            pink: item.type.name == `bug`,
                            grey: item.type.name == `poison`,
                            brown: item.type.name == `flying`,
                            butter: item.type.name == `normal`,
                            lightPurple: item.type.name == `electric`,
                            geranium: item.type.name == `fairy`,
                            mustard: item.type.name == `psychic`,
                            pencilLead: item.type.name == `rock`,
                            ice: item.type.name == `ice`,
                            matPurple: item.type.name == `ghost`,
                            skirretGreen: item.type.name == `dragon`,
                            lightGrey: item.type.name == `dark`,
                        }"
                    >
                        {{ item.type.name }}
                    </li>
                </ul>


                <!-- modal -->
                <div  class="modal" :class="{dNone: modalClose, dBlock: modalOpen}" :id="`modal${index}`">
                    <div>
                        <img :src="pokemon.sprites.front_default" alt="Pokemon Image">
                        <img :src="pokemon.sprites.front_shiny" alt="Pokemon Image">

                        <h3>{{ pokemon.name }}</h3>

                        <ul>
                            <li>Height: {{ pokemon.height }}M</li>
                            <li>Weight: {{ pokemon.weight }}Kg</li>
                        </ul>
    
                        <ul>
                            <span>Abilities</span>
                            <li v-for="(ability, index) in pokemon.abilities" :key="index">{{ ability.ability.name }}</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        <!-- pagination -->
        <div class="paginationBox" v-if="this.scrollOrPagination == 'pagination'">
            <button class="prevBtn" @click="pagination('prev')">Prev</button>
            <span>{{ pokemonList.length }}</span>
            <button class="nextBtn" @click="pagination('next')">Next</button>
        </div>
    </div>
</template>

<script>
    import api from '@/services/api';

    export default {
    name: "PokemonList",
    data() {
        return {
            // list of all info
            pokemonList: [],
            length: 1,
            scrollOrPagination: '',
            // modal
            modalOpen: false,
            modalClose: true
        };
    },
    props: {
        filter: Array
    },
    watch: {
        filter(newFilter) {
            // filter from a number to a number
            if(newFilter[0].fromNumber == null) { // if the input is null
                // alert('all input is null')
            }else {
                if(newFilter[0].toNumber == null) { // if the input is null
                    alert('second input is null')
                }else if(newFilter[0].fromNumber > newFilter[0].toNumber) { // if the second input is less than the first
                    alert('second item is less than the first')
                }else {
                    newFilter[0].scrollPagination = 'pagination'
                    
                    for (let i = newFilter[0].fromNumber; i <= newFilter[0].toNumber; i++) {
                    
                        api.get(`pokemon/${i}`).then(response => {
                            this.pokemonList.push(response.data);
                        });
                    }
                }
            }

            this.scrollOrPagination = newFilter[0].scrollPagination

            // filter infinite scroll or pagination
            if(newFilter[0].scrollPagination == 'pagination') {
                this.pagination('next')
            }

            else if(newFilter[0].scrollPagination == 'scroll') {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                    if (bottomOfWindow) {
                        this.infiniteScroll();
                    }
                }
                this.infiniteScroll()
            }
        }   
    },
    methods: {
        // infinite scroll
        infiniteScroll() {
            // filter items per page
            this.perPage = this.filter[0].objPerPage
            this.length = this.pokemonList.length
            for (let i = 1; i <= this.perPage; i++) {
                this.length += 1
                api.get(`pokemon/${this.length}`).then(response => {
                    this.pokemonList.push(response.data);
                });
            }
        },
        // paginaton
        pagination(btnClick) {
            // next button
            if(btnClick == 'next') {
                // filter items per page
                this.perPage = this.filter[0].objPerPage
                this.length = this.pokemonList.length
                for (let i = 1; i <= this.perPage; i++) {
                    this.length += 1
                    api.get(`pokemon/${this.length}`).then(response => {
                        this.pokemonList.push(response.data);
                    });
                }
            } 
            // prev button
            else {
                this.perPage = this.filter[0].objPerPage
                if(this.pokemonList.length <= this.perPage) console.log('no')
                else this.pokemonList.splice(-this.perPage)
            }
        },
        openModal(id) {
            this.$el.querySelector(`#modal${id}`).classList.toggle('dNone')
            this.$el.querySelector(`#modal${id}`).classList.toggle('dBlock')
        },
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/colors.scss";

    .dBlock {
        display: block!important;
    }

    .dNone {
        display: none!important;
    }

    div {
        margin-top: 1em;
        text-align: center;

        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            list-style-type: none;
        }
        // pagination box
        .paginationBox {
            margin: auto;
            display: inline-block;
            background-color: $bg-sec-color;
            box-shadow: 1px 1px 5px rgba($txt-prim-color, .2);


            span {
                display: inline-block;
                font-size: 1.5em;
                padding: 0 5px;
            }

            button {
                font-size: 1.1em;
                padding: 5px 15px;
                border: none;
                background-color: $red;
                color: $bg-sec-color;
                border-radius: 3px;

                &:hover {
                    opacity: .7;
                    cursor: pointer;
                }
            }
        }
    }

    // modal
    .modal {
        width: 100%;
        min-height: 100%;
        display: block;
        position: fixed;
        margin: 0;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgba($txt-prim-color, .3);
       div {
            width: 300px;
            height: 350px;
            background-color: $bg-prim-color;
            box-shadow: 1px 1px 5px rgba($txt-prim-color, .2);
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 2;
            border: 5px solid $red;
            border-radius: 12px;
           img {
               // position: relative;
               bottom: 0;
               width: 7em;
           }

           h3 {
            margin-top: -40px;
            margin-bottom: 10px;
            font-size: 1.8em;
           }
   
           ul {
               list-style-type: none;
               display: flex;
               flex-direction: column;
               font-size: 1.5em;
               font-weight: bold;
               color: $bg-sec-color;
   
               span {
                   color: $txt-prim-color;
                   font-size: 1.15em;
               }
   
               li {
                   background-color: $red;
                   border-radius: 3px;
                   margin: 3px;
               }
           }
       }


    }

    // pokemon component
    .red { background-color: $red; }
    .green { background-color: $green; }
    .blue { background-color: $blue; }
    .yellow { background-color: $yellow; }
    .orange { background-color: $orange; }
    .purple { background-color: $purple; }
    .pink { background-color: $pink; }
    .grey { background-color: $grey; }
    .brown { background-color: $brown; }
    .butter { background-color: $butter; }
    .lightPurple { background-color: $light-purple; }
    .geranium { background-color: $geranium; }
    .mustard { background-color: $mustard; }
    .pencilLead { background-color: $pencil-lead; }
    .ice { background-color: $ice; }
    .matPurple { background-color: $mat-purple; }
    .skirretGreen { background-color: $skirret-green; }
    .lightGrey { background-color: $light-grey; }

    // pokemon card
    li.pokemonCard {
        background-color: $bg-sec-color;
        position: relative;
        margin: 5px;
        width: 24%;
        margin-bottom: 3em;
        text-align: center;
        box-shadow: 1px 1px 5px rgba($txt-prim-color, .2);
        border-radius: 10px;

        @media only screen and (max-width: 1024px) {
            width: 32%;
        }
        @media only screen and (max-width: 800px) {
            width: 47%;
        }
        @media only screen and (max-width: 557px) {
            width: 90%;
        }

        span.id {
            font-size: 1.5em;
            font-weight: bold;
            display: block;
            position: relative;
            bottom: 2em;
        }

        span.name {
            font-size: 1.5em;
            position: relative;
            bottom: 1.4em;
        }
        
        img {
            position: relative;
            bottom: 3em;
        }

        ul.type {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            list-style-type: none;
            li {
                font-size: 1.2em;
                padding: 5px 15px;
                position: relative;
                bottom: 1em;
                color: $bg-sec-color;
                border-radius: 5px;
            }
        }
    }
</style>