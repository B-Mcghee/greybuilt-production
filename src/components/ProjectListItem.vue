<template>
  <div v-if="isLoaded">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    project: undefined,
    isLoaded: false,
  }),
  mounted() {
    this.findProject();
  },
  methods: {
    findProject() {
      this.allProjects.filter((p) => {
        if (p.id == this.$route.params.id) {
          this.project = p;
        }
      });
      this.isLoaded = true;
      return this.project;
    },
  },
  computed: {
    ...mapGetters(["allProjects"]),
  },
};
</script>

<style>
.carousel {
  max-width: 1080px;
}
</style>
