<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  background: #8fc5f7;
}

.p-component.p-button {
  box-shadow: none;
}

input {
  outline: none;
}

select {
  outline: none;
}

button {
  outline: none;
}

.poppins {
		font-family: var(--poppins);
}

.arcade {
  font-family: var(--arcade);
}

.digital {
  font-family: var(--digital);
}
</style>
