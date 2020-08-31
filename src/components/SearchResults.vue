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

export default {
  name: "SearchResults",
  components: {
    JobBox,
  },
  data() {
    return {
      localSearchParams: { description: "", location: "" },
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
  mounted() {
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
