<template>
  <div class="logo">
    <p class="logo-title">{{ companyName }}</p>
    <img :src="logo" alt="logo" class="logo-img" />
    <h2 class="logo-subtitle">Jobs Layin' Around Everywhere</h2>
  </div>
</template>

<script>
import logo from "../assets/img/couch-potato-art.png";

export default {
  name: "Navbar",
  props: {
    companyName: String,
  },
  data() {
    return { logo };
  },
};
</script>

<style lang="scss" scoped>
@import "../global-styles.scss";

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Chau Philomene One", sans-serif;
}
.logo-title {
  font-size: 24px;
  margin: 4px;
}
.logo-subtitle {
  display: none;

  @include tablet {
    display: inline;
    text-align: center;
  }
}
.logo-img {
  width: 80px;

  @include desktop {
    width: 160px;
  }
}
</style>
