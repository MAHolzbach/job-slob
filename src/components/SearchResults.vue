<template>
  <div class>
    <p class="mb-4 text-center font-medium">
      <span class="text-mainBlue">{{ searchResults.length }}</span>
      job{{ searchResults.length >= 2 ? "s" : "" }}
      found
      {{
        localSearchParams.description || localSearchParams.location ? "for" : ""
      }}
      {{
        localSearchParams.description
          ? localSearchParams.description
          : localSearchParams.location
      }}
      {{
        localSearchParams.description && localSearchParams.location
          ? "in " + localSearchParams.location
          : ""
      }}
    </p>
    <Paginate
      v-if="this.$props.searchResults.length > 25"
      :pageCount="numOfPages"
      :prevText="'Prev'"
      :nextText="'Next'"
      :clickHandler="handlePageClick"
      v-model="currentPageNum"
      containerClass="w-full max-w-md flex justify-between items-center mb-4 mx-auto"
      pageClass="flex items-center mx-1 rounded text-mainBlue border border-mainBlue w-full text-center"
      prevClass="text-mainBlue font-semibold border border-mainBlue rounded-l-full px-2 hover:bg-mainBlue hover:text-white"
      prevLinkClass="outline-none"
      nextClass="text-mainBlue font-semibold outline-none border border-mainBlue rounded-r-full px-2 hover:bg-mainBlue hover:text-white"
      nextLinkClass="outline-none"
      pageLinkClass="outline-none w-full text-center hover:bg-mainBlue hover:text-white"
      activeClass="bg-mainBlue text-lightGray"
    />
    <div v-if="isMobile">
      <router-link
        v-for="job in searchResultsToRender"
        :to="{
          name: 'details',
          params: {
            id: job.id,
            job,
          },
        }"
        :key="job.id"
        class="border-2 border-lightGray rounded-lg shadow-sm flex p-2 mb-4 hover:shadow-lg hover:border-mainBlue cursor-pointer"
      >
        <JobBox :job="job" />
      </router-link>
    </div>
    <div
      v-else
      v-for="job in searchResultsToRender"
      :key="job.id"
      :id="job.id"
      class="border-2 border-lightGray rounded-lg shadow-sm flex p-2 mb-4 hover:shadow-lg hover:border-mainBlue cursor-pointer"
      @click="setCurrentJobView(job.id)"
    >
      <JobBox :job="job" />
    </div>
  </div>
</template>

<script>
import JobBox from "./JobBox.vue";
import Paginate from "vuejs-paginate";
import { mapState } from "vuex";

export default {
  name: "SearchResults",
  components: {
    JobBox,
    Paginate,
  },
  computed: mapState(["numOfPages", "currentPageNum", "isMobile"]),
  data() {
    return {
      localSearchParams: { description: "", location: "" },
      searchResultsToRender: [],
      renderStartIndex: 0,
      renderEndIndex: 24,
    };
  },
  props: {
    searchResults: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
      default: () => "",
    },
    location: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    handlePageClick(pageNum) {
      this.renderStartIndex = pageNum * 25 - 25;
      this.renderEndIndex = pageNum * 25 - 1;
      this.$store.commit("setCurrentPageNum", { num: pageNum });
      this.setSearchResultsToRender();
    },
    setSearchResultsToRender() {
      const newResultsToRenderArray = [];
      for (
        let index = this.renderStartIndex;
        index <= this.renderEndIndex;
        index++
      ) {
        const element = this.searchResults[index];
        if (element !== undefined) {
          newResultsToRenderArray.push(element);
        }
      }
      this.searchResultsToRender = newResultsToRenderArray;
    },
    setCurrentJobView(id) {
      this.$store.commit("setCurrentJobView", { id });
    },
  },
  mounted() {
    this.renderStartIndex = this.currentPageNum * 25 - 25;
    this.renderEndIndex = this.currentPageNum * 25 - 1;
    this.setSearchResultsToRender();
    this.localSearchParams = {
      description: this.$props.description,
      location: this.$props.location,
    };
  },
  beforeUpdate() {
    this.localSearchParams = {
      description: this.$props.description,
      location: this.$props.location,
    };
  },
};
</script>
