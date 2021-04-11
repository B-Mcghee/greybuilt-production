<template>
  <base-card class="my-4">
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-img
            max-width="300"
            :src="require(`@/assets/${bio.avatar}`)"
          ></v-img>
        </v-col>

        <v-col cols="12" class=" text-center">
          <div class="text-h4">{{ bio.user.name }}</div>
          <div class="text-h6 primary--text">{{ bio.position }}</div>
        </v-col>
      </v-row>
    </v-container>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
export default {
  components: { BaseCard },
  name: "bio",
  props: {
    bio: {
      type: Object,
    },
  },
};
</script>

<style></style>
