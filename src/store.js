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
    searchTerm: { description: "", location: "" },
    searchResults: [],
    favorites: [],
  },
  mutations: {
    setIsMobile(state) {
      state.isMobile = window.innerWidth < 768;
    },
    searchForJobs(state, payload) {
      state.showSpinner = true;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${payload.description}&location=${payload.location}&markdown=true`
        )
        .then((res) => {
          state.searchResults = res.data;
          state.showSpinner = false;
          state.searchTerm = {
            description: payload.description,
            location: payload.location,
          };
        })
        .catch((error) => {
          console.log(error);
          state.showSpinner = false;
        });
    },
    updateFavorites(state, payload) {
      const favoritedJob = state.searchResults.filter(
        (result) => result.id === payload.id
      );
      const jobAlreadyFavorited =
        state.favorites.filter((favorite) => favorite.id === payload.id)
          .length > 0;

      jobAlreadyFavorited
        ? (state.favorites = state.favorites.filter(
            (favorite) => favorite.id !== payload.id
          ))
        : (state.favorites = [...state.favorites, ...favoritedJob]);
    },
  },
});

export default store;
