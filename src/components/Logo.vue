<template>
  <router-link
    to="/"
    class="flex flex-col justify-center items-center font-logoFont"
  >
    <p class="hidden lg:inline m-1 lg:m-4 text-2xl lg:text-4xl">
      {{ companyName }}
    </p>
    <img :src="logo" alt="logo" class="w-20 lg:w-40" />
    <h2 class="hidden lg:inline lg:text-center lg:text-2xl">
      Git a Job
    </h2>
  </router-link>
</template>

<script>
import logo from "../assets/img/couch-potato-art.png";

export default {
  name: "Logo",
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
