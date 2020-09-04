import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Search from "./components/Search.vue";
import Recent from "./components/Recent.vue";
import Saved from "./components/Saved.vue";
import Applied from "./components/Applied.vue";
import PostJob from "./components/PostJob.vue";
import JobDetails from "./components/JobDetails.vue";

import store from "./store.js";

Vue.use(VueRouter);

const router = new VueRouter({
  base: "/",
  mode: "history",
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
  routes: [
    { path: "/", component: Search },
    { path: "/recent", component: Recent },
    { path: "/saved", component: Saved },
    { path: "/applied", component: Applied },
    { path: "/post", component: PostJob },
    { path: "/job/:id", name: "job", component: JobDetails, props: true },
    {
      path: "/desktopJob/:id",
      name: "desktopJobDetails",
      component: JobDetails,
      props: true,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
