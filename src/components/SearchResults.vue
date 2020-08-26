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
      <div class="min-w-1/4 w-16 mr-2">
        <img v-if="job.company_logo" :src="job.company_logo" alt="logo" />
      </div>
      <div>
        <div>
          <p class="font-medium">{{ job.title }}</p>
          <p class="text-sm">{{ job.company }}</p>
        </div>
        <div v-if="job.location !== 'Remote'">
          <p class="text-sm">{{ job.location }}</p>
        </div>
        <div>
          <span
            class="text-sm border radius-lg w-auto inline-block p-1 bg-lightGray rounded-lg text-darkGray mr-2"
            >{{ job.type }}
          </span>
          <span
            v-if="job.location === 'Remote'"
            class="text-sm border radius-lg w-auto inline-block p-1 bg-lightGray rounded-lg text-darkGray"
            >{{ job.location }}
          </span>
        </div>
        <hr class="my-1" />
        <div>
          <p class="text-xs">
            Posted: {{ new Date(job.created_at).toDateString() }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SearchResults",
  props: {
    searchResults: {
      type: Array,
      default: () => [],
    },
  },
  computed: mapState(["searchTerm"]),
};
</script>
