import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isMobile: window.innerWidth < 768,
  },
  mutations: {
    setIsMobile(state) {
      state.isMobile = window.innerWidth < 768;
    },
  },
});

export default store;
