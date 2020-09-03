<template>
  <div
    class="py-4 bg-white flex justify-between items-start w-full px-4 fixed top-0 z-10 md:flex-col md:w-auto md:fixed md:h-full md:justify-start"
  >
    <Logo :companyName="companyName" />
    <p class="md:hidden font-logoFont m-1 mr-4 md:m-4 text-2xl">JobSlob</p>
    <MobileMenu v-if="isMobile" />
    <DesktopMenu v-else />
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import DesktopMenu from "@/components/DesktopMenu.vue";
import { mapState } from "vuex";

export default {
  name: "Navbar",
  components: {
    Logo,
    MobileMenu,
    DesktopMenu,
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
