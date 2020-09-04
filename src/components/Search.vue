<template>
  <div class="w-full max-w-xs my-0 mx-auto md:max-w-full">
    <p class="pb-6 text-center">
      <span class="text-mainBlue">{{ totalJobNumber }}</span> jobs available
    </p>
    <form
      class="shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6 border md:flex md:items-center md:jutify-between"
      @submit="submitSearch"
    >
      <div class="mb-4 md:flex-1 md:mr-4">
        <label class="block text-darkGray text-lg mb-2 pl-1" for="what"
          >What</label
        >
        <input
          class="border-2 border-midGray-300 bg-white h-10 px-5 w-full rounded-lg text-md text-darkGray focus:outline-none"
          type="text"
          name="what"
          placeholder="Job title, keyword, company"
          :value="description"
          @input="updateSearchParams"
        />
      </div>
      <div class="mb-6 md:flex-1 md:mr-4 md:mb-4">
        <label class="block text-darkGray text-lg mb-2 pl-1" for="where"
          >Where</label
        >
        <input
          class="border-2 border-midGray-300 bg-white h-10 px-5 w-full rounded-lg text-md text-gray-800 focus:outline-none"
          type="text"
          name="where"
          placeholder="city, state, zip, etc."
          :value="location"
          @input="updateSearchParams"
        />
      </div>
      <div class="flex items-center justify-between md:w-32 md:pt-4">
        <button
          class="bg-mainBlue hover:bg-blue-700 text-lightGray py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full h-10"
          type="submit"
          @click="submitSearch"
        >
          <span v-if="showSpinner" class="spinner relative"></span>
          <p v-else>Search</p>
        </button>
      </div>
    </form>
    <Error v-if="error.show" />
    <Recent v-if="searchResults.length <= 0" />
    <div v-else>
      <SearchResults
        :searchResults="searchResults"
        :description="description"
        :location="location"
      />
    </div>
  </div>
</template>

<script>
import Recent from "./Recent.vue";
import SearchResults from "./SearchResults.vue";
import Error from "./Error.vue";
import { mapState } from "vuex";

export default {
  name: "Search",
  components: {
    Recent,
    SearchResults,
    Error,
  },
  computed: mapState({
    totalJobNumber: "totalJobNumber",
    recentSearches: "recentSearches",
    searchResults: "searchResults",
    showSpinner: "showSpinner",
    error: "error",
    description: (state) => state.searchParams.description,
    location: (state) => state.searchParams.location,
  }),
  methods: {
    updateSearchParams(e) {
      this.$store.commit("updateSearchParams", {
        name: e.target.name,
        value: e.target.value,
      });
    },
    submitSearch(e) {
      e.preventDefault();
      this.$store.commit("searchForJobs", {
        description: this.description,
        location: this.location,
        page: 0,
        newSearch: true,
      });
    },
  },
};
</script>

<style>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -5px;
  border-radius: 50%;
  border-top: 2px solid white;
  border-right: 2px solid transparent;
  animation: spinner 0.6s linear infinite;
}
</style>
