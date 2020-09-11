<template>
  <div>
    <div class="m-10 flex flex-col">
      <router-link class="py-2" to="/">
        <p class="text-2xl py-3 border-b-2 border-darkGray hover:text-mainBlue">
          Home
        </p>
      </router-link>
      <router-link class="py-2" to="/recent">
        <p
          @click="setCurrentJobView()"
          class="text-2xl py-3 border-b-2 border-darkGray hover:text-mainBlue"
        >
          Recent Searches
        </p>
      </router-link>
      <router-link class="py-2" to="/saved">
        <p
          @click="setCurrentJobView()"
          class="text-2xl py-3 border-b-2 border-darkGray hover:text-mainBlue"
        >
          Saved Jobs
        </p>
      </router-link>
      <router-link class="py-2" to="/applied">
        <p
          @click="setCurrentJobView()"
          class="text-2xl py-3 border-b-2 border-darkGray hover:text-mainBlue"
        >
          Applied Jobs
        </p>
      </router-link>
      <router-link class="py-2" to="/post">
        <p
          @click="setCurrentJobView()"
          class="text-2xl py-3 border-b-2 border-darkGray hover:text-mainBlue"
        >
          Post Job
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopMenu",
  methods: {
    setCurrentJobView() {
      this.$store.commit("setCurrentJobView", { id: null });
    },
  },
};
</script>
