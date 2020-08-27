<template>
  <div class="w-full p-8">
    <div class="flex flex-col items-center w-full">
      <img v-if="logo" :src="logo" :alt="company" class="w-32 mb-4" />
      <p class="text-xl font-semibold">{{ company }}</p>
    </div>
    <hr class="my-6 w-full border" />
    <div class="flex justify-between">
      <div class="pr-6">
        <p class="text-lg font-semibold">{{ title }}</p>
        <p class="text-sm font-medium">{{ location }}</p>
      </div>
      <img
        :src="isFavorited ? starredIcon : starIcon"
        alt="favorite"
        class="h-6 mt-2"
        @click="updateFavorites"
      />
    </div>
    <hr class="my-4 w-full border" />
    <div>
      <p class="text-lg font-semibold">Description</p>
      <VueMarkdown
        :class="[expanded ? 'h-auto' : 'h-descriptionText', 'overflow-hidden']"
        >{{ description }}</VueMarkdown
      >
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
      <VueMarkdown>{{ howToApply }}</VueMarkdown>
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
  props: [
    "id",
    "name",
    "title",
    "company",
    "location",
    "logo",
    "description",
    "apply",
    "companyUrl",
    "howToApply",
    "jobType",
  ],
  components: {
    VueMarkdown,
    Reviews,
  },
  data() {
    return {
      starIcon,
      starredIcon,
      isFavorited: false,
      expanded: false,
    };
  },
  computed: mapState(["favorites"]),
  methods: {
    updateFavorites() {
      this.isFavorited = !this.isFavorited;
      this.$store.commit("updateFavorites", {
        id: this.id,
        name: this.name,
        title: this.title,
        company: this.company,
        location: this.location,
        logo: this.logo,
        description: this.description,
        apply: this.apply,
        companyUrl: this.companyUrl,
      });
    },
    checkIfFavorited() {
      this.favorites.forEach((favorite) => {
        if (favorite.id === this.id) {
          this.isFavorited = true;
        }
      });
    },
    expandDescription() {
      this.expanded = !this.expanded;
    },
  },
  mounted() {
    this.checkIfFavorited();
  },
};
</script>
