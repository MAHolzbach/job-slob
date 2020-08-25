<template>
  <div
    id="app"
    class="flex flex-col justify-center items-center md:grid md:grid-cols-desktop font-appFont"
  >
    <Navbar />
    <div class="pt-24 w-full">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";

  export default {
    name: "App",
    components: {
      Navbar,
      Footer,
    },
    created() {
      const body = document.querySelector("body");
      const html = document.querySelector("html");
      body.classList = ["overflow-x-hidden"];
      html.classList = ["overflow-x-hidden"];
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