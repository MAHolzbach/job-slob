<template>
  <div class="">
    <p class="mb-4 text-center font-medium">
      <span class="text-mainBlue"> {{ searchResults.length }} </span>job{{
        searchResults.length >= 2 ? "s" : ""
      }}
      found.
    </p>
    <div
      v-for="job in searchResults"
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
        <div>
          <p class="text-sm">{{ job.location }}</p>
        </div>
        <hr class="my-1" />
        <div>
          <p class="text-xs">
            Posted: {{ new Date(job.created_at).toDateString() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    searchResults: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
