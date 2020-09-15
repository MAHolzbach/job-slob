<template>
  <div class="flex justify-between w-full">
    <div class="min-w-1/4 w-16 mr-2 mt-1">
      <img
        v-if="job.company_logo"
        :src="job.company_logo"
        alt="logo"
        class="lg:w-32"
      />
    </div>
    <div class="w-full">
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
    <img
      v-if="editing"
      :src="trashIcon"
      alt="delete"
      @click="updateSaved"
      class="h-6 w-6"
    />
  </div>
</template>

<script>
import trashIcon from "../assets/img/delete.png";

export default {
  name: "JobBox",
  props: {
    job: {
      type: Object,
      default: () => {},
    },
    editing: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      trashIcon,
    };
  },
  methods: {
    updateSaved() {
      this.$store.commit("updateSaved", {
        id: this.job.id,
      });
    },
  },
};
</script>
