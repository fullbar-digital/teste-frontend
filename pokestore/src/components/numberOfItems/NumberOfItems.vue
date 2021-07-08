<template>
  <div class="">
    <form>
      <h3>Quantidade de Pokemons</h3>

      <div class="inputs">
        <div class="de">
          <div class="md-outline">
            <input v-model.number="de" type="number" id="de" required />
            <label for="de">De</label>
            <p class="ghost">De</p>
          </div>
        </div>
        <div class="ate">
          <div class="md-outline ate">
            <input v-model.number="ate" type="number" id="ate" required />
            <label for="ate">Até</label>
            <p class="ghost">Até</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    de: {
      get() {
        return this.$store.state.de;
      },

      set(de) {
        this.$store.commit("setNumberOfItemsDe", de);
      },
    },

    ate: {
      get() {
        return this.$store.state.ate;
      },

      set(ate) {
        this.$store.commit("setNumberOfItemsAte", ate);
      },
    },
  },
  methods: {},

  props: {
    tipo: { type: String },
  },
};
</script>

<style src="./Style.scss" lang="scss" scoped/>