<template>
  <div>
    <h1>FAVORITES COMPONENT</h1>
    <div v-for="favorite in favorites" :key="favorite.id">
      {{ favorite.title }}
      {{ favorite.company }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Favorites",
  computed: mapState(["favorites"]),
};
</script>
