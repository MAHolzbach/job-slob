import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Search from "./components/Search.vue";
import Applied from "./components/Applied.vue";
import Saved from "./components/Saved.vue";
import PostJob from "./components/PostJob.vue";
import JobDetails from "./components/JobDetails.vue";

import store from "./store.js";

Vue.use(VueRouter);

const router = new VueRouter({
  base: "/",
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: "/", component: Search },
    { path: "/applied", component: Applied },
    { path: "/saved", component: Saved },
    { path: "/post", component: PostJob },
    { path: "/job/:id", name: "job", component: JobDetails, props: true },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
