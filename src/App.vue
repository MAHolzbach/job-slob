<template>
  <div
    id="app"
    class="flex flex-col justify-center items-center md:grid md:grid-cols-desktop font-appFont"
  >
    <Navbar />
    <router-view/>
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
      const body = document.querySelector('body')
      const html = document.querySelector('html')
      body.classList = ['overflow-x-hidden']
      html.classList = ['overflow-x-hidden']
      window.addEventListener("resize", this.setIsMobile);
    },
    destroyed() {
      window.removeEventListener("resize", this.setIsMobile);
    },
    data() {
      return {};
    },
    methods: {
      setIsMobile() {
        this.$store.commit("setIsMobile");
      },
    },
  };
</script>

<style src="./assets/tailwind.css">