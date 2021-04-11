<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          class="d-flex justify-center"
          cols="12"
          sm="6"
          v-for="(bio, index) in allBios"
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
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Bio,
  },
  data: () => ({}),
  methods: {
    ...mapActions(["fetchBios"]),
  },
  computed: { ...mapGetters(["allBios"]) },
  created() {
    this.fetchBios();
  },
};
</script>

<style></style>
