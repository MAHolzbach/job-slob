<template>
  <div class="md:w-full">
    <h1 class="text-lg font-semibold text-center mb-6">Jobs Applied To</h1>
    <div
      v-for="job in applied"
      :key="job.id"
      class="border-2 border-lightGray rounded-lg shadow-sm flex p-2 mb-4 hover:shadow-lg hover:border-mainBlue cursor-pointer"
    >
      <JobBox :job="job" />
    </div>
  </div>
</template>

<script>
import JobBox from "./JobBox.vue";
import { mapState } from "vuex";
export default {
  name: "Favorites",
  components: {
    JobBox,
  },
  computed: mapState(["applied"]),
};
</script>
