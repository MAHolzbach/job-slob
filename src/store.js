import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isMobile: window.innerWidth < 768,
    totalJobNumber: "153",
    recentSearches: [
      {
        id: 1,
        what: "Javascript Developer",
        where: "United States",
        howMany: 120,
      },
      { id: 2, what: "Vue Developer", where: "Colorado", howMany: 9 },
      { id: 3, what: "Reactjs", where: "United States", howMany: 82 },
    ],
  },
  mutations: {
    setIsMobile(state) {
      state.isMobile = window.innerWidth < 768;
    },
  },
});

export default store;
