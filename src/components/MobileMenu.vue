<template>
  <div id="mobileNavMenu">
    <div
      @click="handleClick"
      @dblclick="handleClick"
      class="cursor-pointer relative z-20 float-right py-4"
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
    <div
      class="bg-white transform top-0 right-0 w-full fixed h-full overflow-auto ease-in-out transition-all duration-300 z-10"
      :class="menuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="m-10 flex flex-col">
        <router-link class="py-2" to="/">
          <p
            @click="handleClick"
            class="text-2xl py-3 border-b-2 border-darkGray hover:text-mainBlue"
          >
            Home
          </p>
        </router-link>
        <router-link class="py-2" to="/applied">
          <p
            @click="handleClick"
            class="text-2xl py-3 border-b-2 border-darkGray hover:text-mainBlue"
          >
            Applied
          </p>
        </router-link>
        <router-link class="py-2" to="/saved">
          <p
            @click="handleClick"
            class="text-2xl py-3 border-b-2 border-darkGray hover:text-mainBlue"
          >
            Saved Jobs
          </p>
        </router-link>
        <router-link class="py-2" to="/post">
          <p
            @click="handleClick"
            class="text-2xl py-3 border-b-2 border-darkGray hover:text-mainBlue"
          >
            Post Job
          </p>
        </router-link>
      </div>
    </div>
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
