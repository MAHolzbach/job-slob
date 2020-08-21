import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Search from "./components/Search.vue";
import Favorites from "./components/Favorites.vue";
import TopCompanies from "./components/TopCompanies.vue";
import PostJob from "./components/PostJob.vue";

import store from "./store.js";

Vue.use(VueRouter);

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: Search },
    { path: "/favorites", component: Favorites },
    { path: "/top", component: TopCompanies },
    { path: "/post", component: PostJob },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
