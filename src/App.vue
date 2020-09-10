<template>
  <div id="app" class="font-appFont">
    <div class="flex flex-col justify-between w-full items-center md:flex-row md:items-start">
      <Navbar />
      <div
        class="pt-24 px-6 w-full md:pt-6 md:pb-20 md:flex md:justify-center md:w-8/12 md:ml-290 md:mr-496"
      >
        <router-view />
      </div>
      <div
        v-if="!isMobile"
        class="fixed overflow-scroll h-full right-0 w-4/12 max-w-detailsMax pr-2"
      >
        <JobDetails :job="currentJobView[0]" />
      </div>
    </div>
    <Footer />
  </div>
</template>
//TODO: Fix rendering of search and job details when switching between mobile and desktop.
//TODO: Hide jobDetails on desktop when navigating away from homepage.
//TODO: Style desktop navbar.
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