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

const scrollBehavior = (to, from, savedPosition) => {
  console.log("SCROLL");
  if (savedPosition) {
    console.log("IF");
    return savedPosition;
  } else {
    console.log("ELSE");
    return { x: 10, y: 10 };
  }
};

const router = new VueRouter({
  scrollBehavior,
  base: "/",
  mode: "history",
  // /*eslint-disable */
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // },
  // /*eslint-enable */
  routes: [
    { path: "/", component: Search },
    { path: "/recent", component: Recent },
    { path: "/saved", component: Saved },
    { path: "/applied", component: Applied },
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
