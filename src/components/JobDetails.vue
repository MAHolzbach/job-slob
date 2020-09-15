<template>
  <div class="w-full px-4 py-6">
    <div class="flex flex-col items-center w-full">
      <img
        v-if="job.company_logo"
        :src="job.company_logo"
        :alt="job.company"
        class="w-32 mb-4"
      />
      <p class="text-xl font-semibold">{{ job.company }}</p>
    </div>
    <hr class="my-6 w-full border" />
    <div class="flex justify-between">
      <div class="pr-6">
        <p class="text-lg font-semibold">{{ job.title }}</p>
        <p class="text-sm font-medium">{{ job.location }}</p>
      </div>
      <img
        :src="isSaved ? starredIcon : starIcon"
        alt="favorite"
        class="h-6 mt-2 cursor-pointer"
        @click="updateSaved"
      />
    </div>
    <hr class="my-4 w-full border" />
    <div>
      <p class="text-lg font-semibold">Description</p>
      <VueMarkdown
        :class="[expanded ? 'h-auto' : 'h-descriptionText', 'overflow-hidden']"
        :source="job.description"
        watches="['job.description']"
      ></VueMarkdown>
      <p
        class="text-mainBlue font-semibold mt-2 cursor-pointer w-auto inline-block"
        @click="expandDescription"
      >
        Read {{ expanded ? "Less" : "More" }}
      </p>
    </div>
    <hr class="my-4 w-full border" />
    <div>
      <p class="text-lg font-semibold">How To Apply</p>
      <VueMarkdown
        :source="job.how_to_apply"
        watches="['job.how_to_apply']"
      ></VueMarkdown>
    </div>
    <hr class="my-4 w-full border" />
    <Reviews />
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import starIcon from "../assets/img/star.png";
import starredIcon from "../assets/img/starred.png";
import Reviews from "./Reviews.vue";
import { mapState } from "vuex";

export default {
  name: "JobDetails",
  props: ["job"],
  components: {
    VueMarkdown,
    Reviews,
  },
  data() {
    return {
      starIcon,
      starredIcon,
      isSaved: false,
      expanded: false,
    };
  },
  computed: mapState(["saved"]),
  methods: {
    updateSaved() {
      this.isSaved = !this.isSaved;
      this.$store.commit("updateSaved", {
        id: this.job.id,
      });
    },
    checkIfSaved() {
      this.saved.forEach((saved) => {
        if (saved.id === this.job.id) {
          this.isSaved = true;
        }
      });
    },
    expandDescription() {
      this.expanded = !this.expanded;
    },
  },
  beforeMount() {
    if (this.job.title === undefined) {
      this.$router.push("/");
    }
  },
  mounted() {
    this.checkIfSaved();
  },
  beforeUpdate() {
    this.isSaved = false;
    this.checkIfSaved();
  },
};
</script>
