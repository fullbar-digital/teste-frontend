<template>
    <div id="home">
        <h1>Pokedex</h1>
        <!-- filters -->
        <FormComponent @filter="filter = $event" />
        <!-- pokemon list -->
        <PokemonList :filter="filter" />
    </div>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue';
import PokemonList from '@/components/PokemonList.vue';

export default {
    name: 'HomeView',
    components: {
        FormComponent,
        PokemonList
    },
    data() {
        return {
            filter: []
        }
    },
    watch: {
        filter(newFilter) {
            this.filter = newFilter
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/colors.scss'; // colors

    #home {
        width: 100%;
        max-width: 1140px;
        margin: auto;
        padding: 1em .7em;
    }
</style>
