<template>
  <div id="app" class="flex flex-col justify-center items-center md:grid md:grid-cols-desktop">
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

<style></style>

<style src="./assets/tailwind.css">