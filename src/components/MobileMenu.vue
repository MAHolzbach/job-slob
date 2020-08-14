<template>
  <div @click="handleClick" class="mobile-menu-wrapper">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  methods: {
    handleClick(e) {
      console.log(e.target);
    },
  },
};
</script>

<style lang="scss">
@import "../global-styles.scss";

.mobile-menu-wrapper {
  cursor: pointer;

  & > span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: $black;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
}
</style>
