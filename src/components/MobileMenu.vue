<template>
  <div class="h-screen">
    <div
      @click="handleClick"
      @dblclick="handleClick"
      class="cursor-pointer relative z-10 float-right py-6 pr-8"
    >
      <span
        class="block w-8 h-1 w-1 mb-1 relative bg-black rounded z-1 transition-all duration-500 ease-in-out origin-right"
        :class="{
          'transform rotate-45 translate-y-2 translate-x-arrowPointer w-1/2': menuOpen,
        }"
      ></span>
      <span
        class="block w-8 h-1 w-1 mb-1 relative bg-black rounded z-1 origin-hamburgerSpan transition duration-500 ease-in-out"
      ></span>
      <span
        class="block w-8 h-1 w-1 mb-1 relative bg-black rounded z-1 transition-all duration-500 ease-in-out origin-right"
        :class="{
          'transform -rotate-45 -translate-y-2 translate-x-arrowPointer w-1/2': menuOpen,
        }"
      ></span>
    </div>
    <ul
      class="transition-all duration-500 ease-in-out bg-gray-400 h-screen px-8 pt-16"
      :class="menuOpen ? 'open' : 'closed'"
    >
      <li>Home</li>
      <li>Search</li>
      <li>Favorites</li>
      <li>Top Companies</li>
      <li>Post Job</li>
      <li>Report Listing</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  methods: {
    handleClick() {
      this.menuOpen = !this.menuOpen;
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<style>
.closed {
  transform-origin: 0% 0%;
  transform: translate(150%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}
.open {
  transform: none;
}
</style>
