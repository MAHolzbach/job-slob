<template>
  <div>
    <div
      v-if="saved.length > 0"
      class="flex justify-between items-center w-full mb-6"
    >
      <p class="text-lg font-semibold">SAVED JOBS</p>
      <button
        class="bg-lightGray hover:bg-midGray text-darkGray font-medium py-1 px-4 rounded-full focus:outline-none w-20"
        @click="setEditState"
      >
        {{ editing ? "Save" : "Edit" }}
      </button>
    </div>
    <p v-else class="text-xl font-semibold text-center mb-6">
      NO SAVED JOBS
    </p>
    <div
      v-for="job in saved"
      :key="job.id"
      class="border-2 border-lightGray rounded-lg shadow-sm flex p-2 mb-4 hover:shadow-lg hover:border-mainBlue cursor-pointer"
    >
      <JobBox :job="job" :editing="editing" />
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
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    setEditState() {
      this.editing = !this.editing;
    },
  },
  computed: mapState(["saved"]),
};
</script>
