<template>
  <div class="">
    <p class="mb-4 text-center font-medium">
      <span class="text-mainBlue"> {{ searchResults.length }} </span>job{{
        searchResults.length >= 2 ? "s" : ""
      }}
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
      containerClass="flex w-full justify-between items-center mb-4"
      pageClass="flex items-center mx-1 rounded text-mainBlue border border-mainBlue w-full text-center"
      prevClass="text-mainBlue font-semibold outline-none border border-mainBlue rounded-l-full px-2 hover:bg-mainBlue hover:text-white"
      nextClass="text-mainBlue font-semibold outline-none border border-mainBlue rounded-r-full px-2 hover:bg-mainBlue hover:text-white"
      pageLinkClass="outline-none w-full text-center hover:bg-mainBlue hover:text-white"
      activeClass="bg-mainBlue text-lightGray"
    />
    <div>
      <router-link
        v-for="job in searchResultsToRender"
        :to="{
          name: 'job',
          params: {
            id: job.id,
            title: job.title,
            company: job.company,
            location: job.location,
            logo: job.company_logo,
            description: job.description,
            apply: job.how_to_apply,
            companyUrl: job.company_url,
            howToApply: job.how_to_apply,
            type: job.type,
          },
        }"
        :key="job.id"
        class="border-2 border-lightGray rounded-lg shadow-sm flex p-2 mb-4 hover:shadow-lg hover:border-mainBlue cursor-pointer"
      >
        <JobBox :job="job" />
      </router-link>
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

<style lang="scss" scoped>
// .active {
//   background-color: $activeBlue;
//   color: white;
// }
</style>
