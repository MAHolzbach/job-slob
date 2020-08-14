<template>
  <div id="app" >
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
    created() {
      window.addEventListener("resize", this.setIsMobile);
    },
    destroyed() {
      window.removeEventListener("resize", this.setIsMobile);
    },
    data() {
      return {
        count: this.$store.state.count,
      };
    },
    methods: {
      setIsMobile() {
        this.$store.commit("setIsMobile");
      },
    },
  };
</script>

<style lang="scss">
  #app {
    @apply flex flex-col justify-center items-center;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: minmax(250px, 25%) 1fr;
    }
  }
</style>

<style src="./assets/tailwind.css">