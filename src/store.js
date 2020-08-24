import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

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
    showSpinner: false,
    searchResults: [],
  },
  mutations: {
    setIsMobile(state) {
      state.isMobile = window.innerWidth < 768;
    },
    searchForJobs(state, payload) {
      state.showSpinner = true;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${payload.description}&location=${payload.location}`
        )
        .then((res) => {
          state.searchResults = res.data;
          state.showSpinner = false;
        })
        .catch((error) => {
          console.log(error);
          state.showSpinner = false;
        });
    },
  },
});

export default store;
