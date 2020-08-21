module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        mainBlue: "#2857f8",
        grayBlue: "#7588ad",
        lightGray: "#eef0f1",
        midGray: "#bbc2ca",
        darkGray: "#46494a",
      },
      gridTemplateColumns: {
        desktop: "minmax(250px, 25%) 1fr",
      },
      transformOrigin: {
        hamburderSpan: "4px 0px",
        hamburgerSpan0: "0% 0%",
        hamburgerSpan2: "0% 100%",
      },
      translate: {
        arrowPointer: "14px",
      },
    },
    fontFamily: {
      appFont: ["Roboto", "sans-serif"],
      logoFont: ["Chau Philomene One", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
