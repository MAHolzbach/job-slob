<template>
  <div id="app" class="font-appFont flex flex-col h-full lg:pt-6">
    <div class="flex flex-col justify-between w-full items-center lg:flex-row lg:items-start">
      <Navbar />
      <div
        class="pt-24 px-6 w-full lg:px-2 lg:pt-6 lg:pb-20 lg:flex lg:justify-center lg:w-8/12 lg:ml-290 lg:mr-searchMarginRight"
      >
        <router-view />
      </div>
      <div
        v-if="!isMobile"
        class="fixed overflow-x-hidden h-desktopDetails right-0 w-4/12 max-w-detailsMax pr-2 job-details__wrapper"
      >
        <JobDetails v-if="currentJobView[0]" :job="currentJobView[0]" />
      </div>
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

<style lang="scss">
.job-details__wrapper {
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>


<style src="./assets/tailwind.css">