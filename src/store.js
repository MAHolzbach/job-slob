import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { uuidv4 } from "./utils";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isMobile: window.innerWidth < 768,
    totalJobNumber: "153",
    recentSearches: [
      {
        id: uuidv4(),
        what: "Javascript Developer",
        where: "United States",
        howMany: 12,
      },
      { id: uuidv4(), what: "Vue", where: "", howMany: 9 },
      { id: uuidv4(), what: "React", where: "United States", howMany: 10 },
    ],
    showSpinner: false,
    searchParams: { description: "", location: "" },
    searchResults: [],
    saved: [],
    applied: [
      {
        id: "8504211f-bbfb-47bf-8d22-23498652bd0b",
        type: "Contract",
        url:
          "https://jobs.github.com/positions/8504211f-bbfb-47bf-8d22-23498652bd0b",
        created_at: "Wed Aug 26 12:58:59 UTC 2020",
        company: "Smartico",
        company_url: "http://smartico.eu",
        location: "Europe-wide",
        title: "Co-founding/Leading Wordpress Architect",
        description:
          'We are an **award-winning, innovative technology company** that develops scalable, profitable solutions for **media companies** to increase their digital advertising revenues. Our more than 100 customers include the largest daily newspapers and magazines in Germany, Austria, Switzerland and Benelux. We are based in Berlin, Munich, Sofia (BG) and Carlsbad (CZ) and all over Europe.\r\n\r\nFor a completely new product, we are searching for a\r\n\r\n**Lead WordPress Developer/Architect**\r\n\r\n**About You and Your Experience**\r\n- Self-responsible, independent, logical thinker with "hands-on" and "can do" attitude\r\n- Uncanny ability (and desire) to dive-in to unfamiliar systems and learn on the fly\r\n- Deep understanding of Wordpress, plugins, 3rd party APIs, etc. and the underlying architecture/logic of the CMS\r\n- Solid understanding of web development best practices like HTML and CSS with a focus on cross browser support\r\n- Knowledge in JavaScript, jQuery and Bootstrap\r\n- Experienced in development and implementation of WordPress Plugins\r\n- Proven track record of complex successful WordPress projects beyond simple websites\r\n- Strong understanding of PHP from a WordPress perspective\r\n- Ability to turn XD files into a WordPress theme\r\n- Knowledge in Pagebuilder like Elementor\r\n- Knowledge in XML, JSON and REST APIs\r\n- Ability and willingness to work with a team using a unified/documented development and coding style\r\n\r\n**About the project**\r\n- Multi-Site setup for various large European newspapers based on WordPress with complex, graphic-intense long read articles, tools and local listing directories.\r\n- Complete Re-Design of the UX of WordPress CMS for sales teams in the newspapers to allow them to build or re-use content without any CMS trainings\r\n- Additional pre-sales and after-sales tools like lavish reportings/dashboards, sales materials with automatic screenshots of the pages, sharing of designs and contents across newspapers, etc.\r\n- Additional features for the local listings like e-commerce features, couponing options, etc.\r\n- We have a MVP but you wqill start from scratch and make every architecture decision without restrictions. You define the long-term success of this project!',
        how_to_apply: "Email your resume to cs@smartico.eu",
        company_logo:
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcmlJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cf3d7c16d26cb6a805cd39487a2de0439549f943/smartico-vertical1.png",
      },
      {
        id: "883d6672-8994-4884-96a9-3ca322d3c7f1",
        type: "Full Time",
        url:
          "https://jobs.github.com/positions/883d6672-8994-4884-96a9-3ca322d3c7f1",
        created_at: "Tue Aug 25 19:02:25 UTC 2020",
        company: "Harbinger Marketing",
        company_url: "https://harbingermarketing.com/",
        location: "Remote",
        title: "Full-stack Web Developer (Front-end & PHP/WordPress)",
        description:
          "A Harbinger Marketing Remote Full-stack Web Developer is responsible for, but not limited to:\r\n\r\n- Turn provided design files (PSD, AI, Adobe XD, Figma or other) into a fully working WordPress website, using a custom-built theme, according to the client's requirements and designer's notes\r\n- Apply modifications to existing websites\r\n- Provide website support (ex. updating plugins, fixing bugs, speed optimizations, etc.)\r\n- Perform other tasks that are related to web development\r\n\r\nThe briefs and designs are being delivered to our web developers by way of our project management software. The web developer is expected to learn the project management software and time tracking software, and implement them into their daily workflow. This helps us to work efficiently and stay ahead of deadlines.\r\n\r\nThe amount of information in the provided brief and the number of design files will vary. The web developer will be responsible for working with and communicating effectively with our Lead Developer, Project Managers, Art Director and to complete each task. We require our web developers to be proactive by showing initiative in the development process in order to create a high-quality end product.\r\n\r\n\r\nExamples of websites that we have worked on can be seen below:\r\n\r\n- https://harbingermarketing.com/\r\n- https://southlandcontrols.net/\r\n- https://georgiarefinishing.com/\r\n- https://able2rentall.com/\r\n- https://brent.us/\r\n- https://brownnelms.com/\r\n\r\n\r\nWeb developer qualifications:\r\n\r\n- Have 5+ years of programming experience\r\n- Be proficient in HTML5, CSS3, JavaScript (jQuery), PHP and WordPress (WooCommerce)\r\n- Write clean, consistent, maintainable and easy-to-read code\r\n- Having experience with creating animations for the web with CSS3 and external libraries like ScrollMagic, GSAP or similar\r\n- Have quick and steady access to the internet\r\n- Has the ability to effectively take critiques, work efficiently under pressure, meet the predefined deadlines and turn around quality products on tight deadlines\r\n- Have eye for details and a healthy dose of perfectionism\r\n- Show initiative and eagerness to be involved creatively with our team\r\n- Willingness to learn and grow with our company\r\n\r\nAlong with your application, please provide portfolio samples of your work (links to the best looking/functional websites you have built) and code samples (HTML, CSS, JS, PHP/WordPress) and/or a GitHub profile.\r\n\r\nPay is discussed individually, based on skill-set, credentials, and experience.\r\n",
        how_to_apply:
          "Email your job application to georgi@harbingermarketing.com",
        company_logo:
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBclNJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--82b28d34e1d090ab21227c6729838d670dbbdfa2/harbinger-logo.png",
      },
    ],
    reviews: [
      {
        id: 1,
        name: "Fred Rogers",
        img: "fredrogers",
        title: "Friendly Neighbor",
        text:
          "I really enjoyed my time here. Learned a ton, worked with amazing people, and advanced my skillset!",
      },
      {
        id: 2,
        name: "Bob Ross",
        img: "bobross",
        title: "Painter",
        text:
          "Quite the place! Leadership truly cares about its people, and they make a great effort to invest in your future.",
      },
      {
        id: 3,
        name: "Cookie Monster",
        img: "cookiemonster",
        title: "Trash Can Occupant",
        text:
          "Cookies cookies cookies! Nom nom nom nom nom! Need more cookies! Nom nom nom!",
      },
    ],
  },
  mutations: {
    setIsMobile(state) {
      state.isMobile = window.innerWidth < 768;
    },
    updateSearchParams(state, payload) {
      if (payload.name === "what") {
        state.searchParams.description = payload.value;
      }
      if (payload.name === "where") {
        state.searchParams.location = payload.value;
      }
    },
    searchForJobs(state, payload) {
      state.showSpinner = true;
      state.searchParams.description = payload.description;
      state.searchParams.location = payload.location;
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${payload.description}&location=${payload.location}&markdown=true`
        )
        .then((res) => {
          state.searchResults = res.data;
          state.showSpinner = false;
          this.commit("updateRecentSearches", {
            id: uuidv4(),
            what: payload.description,
            where: payload.location,
            howMany: res.data.length,
          });
        })
        .catch((error) => {
          console.log(error);
          state.showSpinner = false;
        });
    },
    updateSaved(state, payload) {
      const savedJob = state.searchResults.filter(
        (result) => result.id === payload.id
      );
      const jobAlreadySaved =
        state.saved.filter((saved) => saved.id === payload.id).length > 0;

      jobAlreadySaved
        ? (state.saved = state.saved.filter((saved) => saved.id !== payload.id))
        : (state.saved = [...state.saved, ...savedJob]);
    },
    updateRecentSearches(state, payload) {
      const recentSearchExists =
        state.recentSearches.filter((recent) => recent.id === payload.id)
          .length > 0;

      recentSearchExists
        ? (state.recentSearches = state.recentSearches.filter(
            (recent) => recent.id !== payload.id
          ))
        : (state.recentSearches = [...state.recentSearches, payload]);
    },
  },
});

export default store;
