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
//TODO: Handle pagination.
//FIXME: Scroll behavior on navigation.
//FIXME: Nav back to home if user refreshes on job details view.
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