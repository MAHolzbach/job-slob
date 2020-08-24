<template>
  <div>
    <div class="flex justify-between items-center w-full">
      <p class="font-medium">RECENT SEARCHES</p>
      <button
        class="bg-lightGray hover:bg-midGray text-darkGray font-medium py-1 px-4 rounded-full"
      >
        Edit
      </button>
    </div>
    <div
      v-for="search in recentSearches"
      :key="search.id"
      class="flex items-center justify-between my-4 p-4 border rounded-lg cursor-pointer hover:underline"
    >
      <div>
        <p>{{ search.what }}</p>
        <p>
          <span class="text-mainBlue">{{ search.howMany }} new</span>
          in {{ search.where }}
        </p>
      </div>
      <svg role="img" class="h-6 w-6" aria-label focusable="false">
        <g>
          <path d="M10,6L8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recent",
  props: {
    recentSearches: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
