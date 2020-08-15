<template>
  <div class="flex justify-between items-center w-full px-4">
    <Logo :companyName="companyName" />
    <MobileMenu v-if="isMobile" />
  </div>
</template>

<script>
  import Logo from "@/components/Logo.vue";
  import MobileMenu from "@/components/MobileMenu.vue";
  import { mapState } from "vuex";

  export default {
    name: "Navbar",
    components: {
      Logo,
      MobileMenu,
    },
    data() {
      return {
        companyName: "JobSlob",
      };
    },
    computed: mapState(["isMobile"]),
  };
</script>

<style></style>
