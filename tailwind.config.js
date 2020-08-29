module.exports = {
  purge: [],
  theme: {
    minWidth: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    minHeight: {
      "0": "0",
      "40": "40px",
      full: "100%",
    },
    extend: {
      colors: {
        mainBlue: "#2857f8",
        grayBlue: "#7588ad",
        lightGray: "#eef0f1",
        midGray: "#bbc2ca",
        darkGray: "#46494a",
        errorRed: "#FF4C4C",
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
      height: {
        descriptionText: "16.5rem",
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
