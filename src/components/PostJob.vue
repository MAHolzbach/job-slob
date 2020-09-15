<template>
  <div class="md:w-full">
    <p class="text-lg font-semibold text-center mb-4">
      SUBMIT A JOB TO OUR BOARD
    </p>
    <form
      class="shadow-lg rounded-lg px-8 pt-6 pb-8 mb-6 border"
      @submit="submitJob"
    >
      <div class="mb-4">
        <label class="block text-darkGray text-lg mb-2 pl-1" for="what"
          >Job Title</label
        >
        <input
          :class="errorElements.title"
          class="border-2 bg-white h-10 px-5 w-full rounded-lg text-md text-darkGray focus:outline-none"
          type="text"
          name="what"
          v-model="inputValues.title"
          placeholder="Job title"
        />
      </div>
      <div class="mb-4">
        <label class="block text-darkGray text-lg mb-2 pl-1" for="where"
          >Job Location</label
        >
        <input
          :class="errorElements.location"
          class="border-2 bg-white h-10 px-5 w-full rounded-lg text-md text-darkGray focus:outline-none"
          type="text"
          name="where"
          v-model="inputValues.location"
          placeholder="Job location"
        />
      </div>
      <div class="mb-4">
        <label class="block text-darkGray text-lg mb-2 pl-1" for="where"
          >Description of Position</label
        >
        <textarea
          :class="errorElements.description"
          class="border-2 bg-white h-10 px-5 w-full rounded-lg text-md text-darkGray focus:outline-none min-h-screen h-64 p-4"
          type="text"
          name="description"
          v-model="inputValues.description"
          placeholder="Describe the position..."
        />
      </div>
      <div class="mb-4">
        <label class="block text-darkGray text-lg pl-1" for="how"
          >How to Apply</label
        >
        <p class="block text-darkGray text-sm mb-2 pl-1">
          Provide a URL, a point of contact, or a description of the application
          process
        </p>
        <textarea
          :class="errorElements.howToApply"
          class="border-2 bg-white h-10 px-5 w-full rounded-lg text-md text-darkGray focus:outline-none min-h-screen h-32 p-4"
          type="text"
          name="how"
          v-model="inputValues.howToApply"
          placeholder="Describe how to apply..."
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-mainBlue hover:bg-blue-700 text-lightGray py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline w-full min-h-40"
          type="submit"
          @click="submitJob"
        >
          <span v-if="showSpinner" class="spinner relative"></span>
          <p v-else>Submit</p>
        </button>
      </div>
      <div
        v-if="message.show"
        :class="message.backgroundColor"
        class="rounded-md mb-4 p-4"
      >
        <p>
          {{ message.text }}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostJob",
  data() {
    return {
      inputValues: {
        title: "",
        location: "",
        description: "",
        howToApply: "",
      },
      showSpinner: false,
      message: { show: false, text: "", backgroundColor: "" },
      errorElements: {
        title: "",
        location: "",
        description: "",
        howToApply: "",
      },
    };
  },
  methods: {
    submitJob(e) {
      e.preventDefault();
      this.showSpinner = true;
      this.message.show = false;

      let errorPresent = false;

      for (const element in this.inputValues) {
        if (this.inputValues[element] === "") {
          this.errorElements[element] = "border-errorRed";
          errorPresent = true;
        } else {
          this.errorElements[element] = "";
        }
      }

      if (errorPresent) {
        this.showSpinner = false;
        this.message = {
          show: true,
          text: "Please fill in all highlighted fields.",
          backgroundColor: "bg-errorRed",
        };
        return;
      } else {
        setTimeout(() => {
          this.message = {
            show: true,
            text: "Job submitted! Good luck in finding a great candidate!",
            backgroundColor: "bg-successGreen",
          };
          this.showSpinner = false;
          this.inputValues.title = "";
          this.inputValues.location = "";
          this.inputValues.description = "";
          this.inputValues.howToApply = "";
        }, 2000);
      }
    },
  },
};
</script>

<style>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  border-radius: 50%;
  border-top: 2px solid white;
  border-right: 2px solid transparent;
  animation: spinner 0.6s linear infinite;
}
</style>
