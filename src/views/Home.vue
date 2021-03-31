<template>
  <div v-if="isMobile" class=" hero-section pt-14">
    <v-row class=" "
      ><v-col cols="12" class="px-12">
        <div class="text-h4 darkestPrimary--text text-center px-2">
          We Build Dream Homes!
        </div>
        <v-row
          ><v-col cols="12" class="d-flex justify-center my-4">
            <v-btn
              height="48"
              max-width="250"
              small
              class="blue lighten-1 white--text text-h6 "
              :to="{ name: 'Contact Us' }"
              >Get Started Today</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <div v-else class="landing-page">
    <v-row class=" d-flex justify-end align-center">
      <v-col cols="6" class="px-12 align-center">
        <div
          class="text-h4 text-md-h2 darkestPrimary--text text-left px-2 pl-lg-8"
        >
          More than just a place to live, but a place you'll be proud to call
          home
        </div>
        <v-row
          ><v-col cols="12" class="d-flex justify-center my-4">
            <v-btn
              height="48"
              width="250"
              class="blue lighten-1 white--text text-h6"
              :to="{ name: 'Contact Us' }"
              >Get Started Today</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import Logo from "../components/UI/Logo.vue";
// @ is an alias to /src

export default {
  name: "Home",
  // components: { Logo },
  data: () => ({ isMobile: false }),

  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>
<style scoped>
.hero-section {
  background-image: url("../assets/mobileLandingPagecopy.jpg");
  background-position: center;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
.landing-page {
  background-image: url("../assets/landingIpadPlus.jpg");
  background-position: center;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}

.container {
  height: 100%;
}
.row {
  height: 100%;
}
</style>
