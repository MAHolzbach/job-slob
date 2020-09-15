<template>
  <div class="w-full my-0 mx-auto lg:max-w-full">
    <div class="lg:bg-cover search-form__wrapper">
      <p class="pb-6 text-center lg:font-semibold">
        Search the GitHub Jobs database for the next step in your career!
      </p>
      <form
        class="shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6 border lg:flex lg:items-center lg:jutify-between lg:rounded-t-none search-form"
        @submit="submitSearch"
      >
        <div class="mb-4 lg:flex-1 lg:mr-4">
          <label
            class="block text-black-900 text-lg mb-2 pl-1 font-semibold"
            for="what"
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
        <div class="mb-6 lg:flex-1 lg:mr-4 lg:mb-4">
          <label
            class="block text-black-900 font-semibold text-lg mb-2 pl-1"
            for="where"
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
        <div class="flex items-center justify-between lg:w-32 lg:pt-4">
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
    </div>
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

<style lang="scss">
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

.search-form__wrapper {
  @media (min-width: 768px) {
    background-image: url("../assets/img/skyline.jpg");
    background-position: center;
  }
}

.search-form {
  @media (min-width: 768px) {
    border-top: none;
  }
}
</style>
