<template>
  <div
    id="app"
    class="flex flex-col justify-between h-screen items-center md:grid md:grid-cols-desktop font-appFont"
  >
    <Navbar />
    <div class="pt-24 px-6 w-full">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
//TODO: Make sure footer sticks to bottom.
//TODO: Saved component: Enable ability to un-save jobs from saved view.
//TODO: Handle pagination.
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
    methods: {
      setIsMobile() {
        this.$store.commit("setIsMobile");
      },
    },
  };
</script>

<style src="./assets/tailwind.css">