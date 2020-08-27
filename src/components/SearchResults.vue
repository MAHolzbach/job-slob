<template>
  <div class="">
    <p class="mb-4 text-center font-medium">
      <span class="text-mainBlue"> {{ searchResults.length }} </span>job{{
        searchResults.length >= 2 ? "s" : ""
      }}
      found for
      {{
        searchTerm.description ? searchTerm.description : searchTerm.location
      }}
      {{
        searchTerm.description && searchTerm.location
          ? "in " + searchTerm.location
          : ""
      }}
    </p>
    <router-link
      v-for="job in searchResults"
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
</template>

<script>
import JobBox from "./JobBox.vue";
import { mapState } from "vuex";

export default {
  name: "SearchResults",
  components: {
    JobBox,
  },
  props: {
    searchResults: {
      type: Array,
      default: () => [],
    },
  },
  computed: mapState(["searchTerm"]),
};
</script>
