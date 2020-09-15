<template>
  <div>
    <div class="flex justify-between mb-4">
      <p class="text-lg font-semibold">Worker Reviews</p>
      <div class="flex items-center">
        <div class="w-10 cursor-pointer" id="leftArrow">
          <img class="w-5 h-5 mr-4" :src="leftChevron" alt="left" />
        </div>
        <div class="w-10 cursor-pointer" id="rightArrow">
          <img class="w-5 h-5 float-right" :src="rightChevron" alt="right" />
        </div>
      </div>
    </div>
    <div class="flex min-w-full flex-1">
      <div
        v-for="review in reviews"
        :key="review.id"
        data-js="carousel-review"
        class="hidden bg-lightGray border border-midGray rounded-lg mb-6 p-4 h-48"
      >
        <div class="flex">
          <img
            :src="require(`../assets/img/${review.img}.jpg`)"
            :alt="review.name"
            class="w-12 rounded-full mr-4"
          />
          <div class="">
            <p class="text-base font-semibold">{{ review.name }}</p>
            <p class="">{{ review.title }}</p>
          </div>
        </div>
        <p class="mt-4">{{ review.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import leftChevron from "../assets/img/left-chevron.png";
import rightChevron from "../assets/img/right-chevron.png";
import { mapState } from "vuex";

export default {
  name: "Reviews",
  data() {
    return {
      leftChevron,
      rightChevron,
      testimonialsIndex: 0,
    };
  },
  methods: {
    moveCarousel(testimonialsIndex, direction, className, elementArray) {
      elementArray.forEach((element, index) => {
        if (element.classList.contains(className)) {
          testimonialsIndex = index;
          element.classList.replace("block", "hidden");
        }
      });
      if (direction === "left") {
        if (testimonialsIndex === 0) {
          return elementArray[elementArray.length - 1].classList.replace(
            "hidden",
            "block"
          );
        }
        return elementArray[testimonialsIndex - 1].classList.replace(
          "hidden",
          "block"
        );
      }
      if (testimonialsIndex === elementArray.length - 1) {
        return elementArray[0].classList.replace("hidden", "block");
      }
      return elementArray[testimonialsIndex + 1].classList.replace(
        "hidden",
        "block"
      );
    },
  },
  computed: mapState(["reviews"]),
  mounted() {
    const testimonialsArray = Array.from(
      document.querySelectorAll("[data-js=carousel-review]")
    );

    testimonialsArray[0].classList.replace("hidden", "block");

    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");

    leftArrow.addEventListener("click", () => {
      this.moveCarousel(
        this.testimonialsIndex,
        "left",
        "block",
        testimonialsArray
      );
    });

    rightArrow.addEventListener("click", () => {
      this.moveCarousel(
        this.testimonialsIndex,
        "right",
        "block",
        testimonialsArray
      );
    });
  },
};
</script>
