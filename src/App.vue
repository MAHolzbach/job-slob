<template>
  <div id="app" class="font-appFont">
    <div class="flex flex-col justify-between w-full items-center md:flex-row">
      <Navbar />
      <div class="pt-24 px-6 w-full md:pb-20 md:flex md:justify-center md:w-8/12 md:ml-290">
        <router-view />
      </div>
      <JobDetails v-if="!isMobile" :job="currentJobView" />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import JobDetails from "./components/JobDetails";
  import Footer from "./components/Footer.vue";
  import { mapState } from "vuex";

  export default {
    name: "App",
    components: {
      Navbar,
      JobDetails,
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
    computed: mapState(["isMobile", "currentJobView"]),
    methods: {
      setIsMobile() {
        this.$store.commit("setIsMobile");
      },
    },
  };
</script>

<style src="./assets/tailwind.css">