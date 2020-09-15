<template>
  <div class="lg:w-full">
    <div
      v-if="recentSearches.length > 0"
      class="flex justify-between items-center w-full"
    >
      <p class="text-lg font-semibold">RECENT SEARCHES</p>
      <button
        class="bg-lightGray hover:bg-midGray text-darkGray font-medium py-1 px-4 rounded-full focus:outline-none w-20"
        @click="setEditState"
      >
        {{ editing ? "Save" : "Edit" }}
      </button>
    </div>
    <p v-else class="text-xl font-semibold text-center mb-6">
      NO RECENT SEARCHES
    </p>
    <div
      v-for="search in recentSearches"
      :key="search.id"
      :id="search.id"
      class="flex items-center justify-between my-4 p-4 border rounded-lg cursor-pointer hover:underline"
      @click="runSearch(search.id)"
    >
      <div>
        <p>{{ search.what }}</p>
        <p>{{ search.where ? search.where : "Global" }}</p>
        <p class="text-mainBlue">{{ search.howMany }} jobs found.</p>
      </div>
      <img
        v-if="editing"
        :src="trashIcon"
        alt="delete"
        @click="removeRecentSearch(search.id)"
        class="h-6 w-6"
      />
      <svg v-else role="img" class="h-6 w-6" aria-label focusable="false">
        <g>
          <path d="M10,6L8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import trashIcon from "../assets/img/delete.png";
import { mapState } from "vuex";

export default {
  name: "Recent",
  computed: mapState(["recentSearches"]),
  data() {
    return {
      editing: false,
      trashIcon,
    };
  },
  methods: {
    setEditState() {
      this.editing = !this.editing;
    },
    removeRecentSearch(id) {
      this.$store.commit("updateRecentSearches", { id });
    },
    runSearch(id) {
      const searchToRun = this.recentSearches.filter(
        (recent) => recent.id === id
      );
      if (this.editing === false) {
        this.$store.commit("searchForJobs", {
          description: searchToRun[0].what,
          location: searchToRun[0].where,
          page: 0,
          newSearch: true,
        });
        this.$router.push("/");
      }
    },
  },
};
</script>
