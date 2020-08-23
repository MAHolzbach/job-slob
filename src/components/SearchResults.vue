<template>
  <div>
    <p>SEARCH RESULTS</p>
    <p v-for="job in searchResults" :key="job.id">{{ job.title }}</p>
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
