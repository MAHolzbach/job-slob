<template>
  <div
    class="py-4 bg-white flex justify-between items-start w-full px-4 fixed top-0 z-10"
  >
    <Logo :companyName="companyName" />
    <p class="md:hidden font-logoFont m-1 mr-4 md:m-4 text-2xl">JobSlob</p>
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
