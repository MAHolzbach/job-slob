<template>
  <div class="nav-wrapper">
    <Logo :companyName="companyName" />
    <MobileMenu />
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import MobileMenu from "@/components/MobileMenu.vue";

export default {
  name: "Navbar",
  components: {
    Logo,
    MobileMenu,
  },
  data: () => {
    return {
      companyName: "JobSlob",
    };
  },
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
