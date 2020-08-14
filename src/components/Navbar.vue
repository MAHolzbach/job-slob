<template>
  <div class="nav-wrapper">
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

<style lang="scss">
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
}
</style>
