<template>
  <div class="w-full max-w-xs">
    <p class="pb-6 text-center">
      <span class="text-mainBlue">{{ totalJobNumber }}</span> jobs available
    </p>
    <form
      class="shadow-lg rounded px-8 pt-6 pb-8 mb-6 border"
      @submit="submitSearch"
    >
      <div class="mb-4">
        <label class="block text-darkGray text-lg mb-2 pl-1" for="what"
          >What</label
        >
        <input
          class="border-2 border-midGray-300 bg-white h-10 px-5 w-full rounded-lg text-md text-darkGray focus:outline-none"
          type="text"
          name="what"
          placeholder="Job title, keyword, company"
          v-model="description"
        />
      </div>
      <div class="mb-6">
        <label class="block text-darkGray text-lg mb-2 pl-1" for="where"
          >Where</label
        >
        <input
          class="border-2 border-midGray-300 bg-white h-10 px-5 w-full rounded-lg text-md text-gray-800 focus:outline-none"
          type="text"
          name="where"
          placeholder="city, state, zip, etc."
          v-model="location"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-mainBlue hover:bg-blue-700 text-lightGray py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
          @click="submitSearch"
        >
          Search
        </button>
      </div>
    </form>
    <Recent :recentSearches="recentSearches" />
  </div>
</template>

<script>
import Recent from "./Recent.vue";
import { mapState } from "vuex";

export default {
  name: "Search",
  components: {
    Recent,
  },
  data() {
    return {
      description: "",
      location: "",
    };
  },
  computed: mapState(["totalJobNumber", "recentSearches", "searchResults"]),
  methods: {
    submitSearch(e) {
      e.preventDefault();
      this.$store.commit("searchForJobs", {
        description: this.description,
        location: this.location,
      });
    },
  },
};
</script>
