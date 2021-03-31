<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          class="d-flex justify-center"
          cols="12"
          sm="6"
          v-for="(bio, index) in bios"
          :key="index"
        >
          <bio :bio="bio" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Bio from "../Bio";
import axios from "axios";
export default {
  components: {
    Bio,
  },
  data: () => ({
    bios: [
      {
        name: "Aaron Witt",
        position: "Founder/ Co-Owner",
        avatar: "aaron.jpg",
      },
      {
        name: "Bilal Powell",
        position: "Co-Owner",
        avatar: "bilal.jpg",
      },
      {
        name: "Kelsey Witt",
        tipositiontle: '"New Home" Consultant / Designer',
        avatar: "kelsey.jpg",
      },
      {
        name: "Jessi Powell",
        position: '"New Home" Consultant / Designer',
        avatar: "jessie.jpg",
      },
    ],
  }),
};
</script>

<style></style>
