<template>
  <div class="flex">
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
  </div>
</template>

<script>
export default {
  name: "JobBox",
  props: {
    job: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
