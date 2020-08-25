<template>
  <div class="w-full p-10">
    <div class="flex flex-col items-center w-full">
      <img v-if="logo" :src="logo" :alt="company" class="w-32 mb-4" />
      <p class="text-xl font-semibold">{{ company }}</p>
    </div>
    <hr class="my-4 w-9/12 border m-auto" />
    <div class="flex">
      <div>
        <p class="text-lg font-semibold">{{ title }}</p>
        <p class="text-sm font-medium">{{ location }}</p>
      </div>
      <img
        :src="favoriteIcon"
        alt="favorite"
        class="h-6"
        @click="updateFavorites"
      />
    </div>
  </div>
</template>

<script>
import favoriteIcon from "../assets/img/favorite.png";

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
  ],
  data() {
    return {
      favoriteIcon,
    };
  },
  methods: {
    updateFavorites() {
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
  },
};
</script>
