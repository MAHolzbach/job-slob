<template>
  <div class="my-4 flex justify-between items-start w-full px-4">
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
