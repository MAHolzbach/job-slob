<template>
  <div @click="handleClick" class="cursor-pointer">
    <span class="block w-8 h-1 mb-1 relative bg-black rounded z-1"></span>
    <span class="block w-8 h-1 mb-1 relative bg-black rounded z-1"></span>
    <span class="block w-8 h-1 mb-1 relative bg-black rounded z-1"></span>
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

<style></style>
