<template>
  <div id="app">
    <img src="./assets/logo.png" width="70%" alt="" />
    <Pokedex />
  </div>
</template>

<script>
import Pokedex from "./components/Pokedex";

export default {
  name: "App",

  components: {
    Pokedex
  },

  data: () => ({
    //
  })
};
</script>

<style>
body {
  background-color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.logo {
  max-width: 70%;
}

.v-application a {
  color: black !important;
}

.page-item a,
.page-item a:active,
.page-item a:hover {
  background-color: #ddd;
  border: 1px solid #ccc;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
}
.page-item a {
  background-color: white;
}
.page-item.first .page-link {
  border-radius: 15px 0px 0px 15px;
}
.page-item.last .page-link {
  border-radius: 0px 15px 15px 0px;
}
.page-item.disabled .page-link {
  pointer-events: none;
}
.page-item.active .page-link {
  background-color: #ddd;
}
</style>
