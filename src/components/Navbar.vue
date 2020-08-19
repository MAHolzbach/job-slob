<template>
  <div class="overflow-x-hidden flex justify-between items-start w-full pl-4">
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
