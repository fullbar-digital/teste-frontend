<template>
  <div class="nav">
    <div class="nav-content">
      <img class="background-nav" src="../../assets/Pokemon-Logo.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    de() {
      return this.$store.state.de;
    },
    ate() {
      return this.$store.state.ate;
    },
  },
};
</script>


<style src="./Style.scss" lang="scss" scoped/>