<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data: () => {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: minmax(250px, 25%) 1fr;
  }
}
</style>
