<template>
  <div class="bg-errorRed rounded-md mb-4 p-4">
    <p class="text-white">{{ error.message }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Error",
  computed: mapState(["error"]),
};
</script>
