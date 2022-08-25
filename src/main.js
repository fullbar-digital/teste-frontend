import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

const Vue = createApp(App)

// Lazy Load
const loadimage = require('./assets/img/loading.gif')

Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: loadimage,
    attempt: 1,
    listenEvents: [ 'scroll' ]
})

Vue.use(router)
Vue.mount('#app')
