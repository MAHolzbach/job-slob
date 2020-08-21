<template>
  <div class="flex flex-col justify-center items-center font-logoFont">
    <p class="hidden md:inline m-1 md:m-4 text-2xl">{{ companyName }}</p>
    <img :src="logo" alt="logo" class="w-20 lg:w-40" />
    <h2 class="hidden md:inline md:text-center">
      Git a Job
    </h2>
  </div>
</template>

<script>
import logo from "../assets/img/couch-potato-art.png";

export default {
  name: "Navbar",
  props: {
    companyName: String,
  },
  data() {
    return { logo };
  },
};
</script>

<style lang="scss">
@import "../global-styles.scss";
</style>
