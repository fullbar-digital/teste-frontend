import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){

        Vue.prototype.$http = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/',
        }),
        Vue.prototype.$pokemon = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/',
        })
    }
})
