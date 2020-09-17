<template>
  <div
    class="py-4 bg-white flex justify-between items-start w-full px-4 fixed top-0 z-10 lg:flex-col lg:w-auto lg:fixed lg:h-full lg:justify-start lg:items-center"
  >
    <Logo :companyName="companyName" />
    <p class="lg:hidden font-logoFont mr-6 lg:m-4 text-4xl">
      JobSlob
    </p>
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
