<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div
            class="text-h3 text-lg-h2 py-3 mb-2 text-center darkPrimary--text"
          >
            {{ project.title }}
          </div>
        </v-col>
        <v-col cols="12">
          <v-carousel class="carousel mx-auto" height="auto" hide-delimiters>
            <v-carousel-item v-for="(image, i) in project.images" :key="i">
              <v-img
                max-width="1080"
                :src="require(`../assets/${image}`)"
                aspect-ratio="1.778"
                @click="overlay = !overlay"
              ></v-img>
            </v-carousel-item>
          </v-carousel>
          <v-card max-width="1080" class="mx-auto my-10" flat
            ><v-container
              ><v-row
                ><v-col cols="12" class="focus--text text-lg-h5">
                  {{ project.description }}</v-col
                >

                <v-col cols="12" sm="4" class="text-subtitle-1 text-md-h6"
                  ><span class="focus--text">Bedrooms: </span
                  >{{ project.beds }}</v-col
                >
                <v-col cols="12" sm="4" class="text-subtitle-1 text-md-h6"
                  ><span class="focus--text">Bathrooms: </span>
                  {{ project.baths }}</v-col
                >

                <v-col cols="12" sm="4" class="text-subtitle-1 text-md-h6">
                  <span class="focus--text">ft&sup2; :</span>
                  {{ project.squareFeet }}
                </v-col></v-row
              ></v-container
            ></v-card
          >
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-hover v-slot="{ hover }">
      <v-card
        max-width="600px"
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
        :to="{ name: 'ProjectItem' }"
      >
        <v-img
          :src="require(`../assets/${project.cover_image}`)"
          aspect-ratio="1"
          ><v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out lightPrimary v-card--revea overlay justify-center text-h2 darkestPrimary--text align-center"
              style="height: 100%;"
            >
              {{ project.title }}
            </div>
          </v-expand-transition></v-img
        >
      </v-card>
    </v-hover> -->
  </div>
</template>

<script>
export default {
  // props: {
  //   project: {
  //     type: Object,
  //   },
  // },
  data: () => ({
    overlay: false,
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    project: {
      id: 1,
      title: "Corydon",
      description:
        "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and we couldn't be more proud",
      cover_image: "Home.jpg",
      images: ["forsale.jpg", "Home.jpg", "side.jpg"],
      sq_footage: "1,456",
      bedrooms: "4",
      bathrooms: "1.5",
      showProject: true,
    },
  }),
  methods: {
    showPic(image) {
      console.log(image);
    },
  },
};
</script>

<style>
.carousel {
  max-width: 1080px;
}
</style>
