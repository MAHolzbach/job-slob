<template>
  <div>
    <h1 class="text-lg font-semibold text-center mb-6">Saved Jobs</h1>
    <p v-if="saved.length === 0" class="text-xl font-semibold text-center mb-6">
      No jobs saved yet!
    </p>
    <div
      v-for="job in saved"
      :key="job.id"
      class="border-2 border-lightGray rounded-lg shadow-sm flex p-2 mb-4 hover:shadow-lg hover:border-mainBlue cursor-pointer"
    >
      <JobBox :job="job" />
    </div>
  </div>
</template>

<script>
import JobBox from "./JobBox";
import { mapState } from "vuex";

export default {
  name: "Saved",
  components: {
    JobBox,
  },
  computed: mapState(["saved"]),
};
</script>
