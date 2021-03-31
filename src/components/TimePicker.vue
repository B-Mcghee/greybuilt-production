<template>
  <div>
    <v-card>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Select Call Time</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row justify="space-around my-2">
          <div>
            <time-select v-model="time"></time-select>
          </div>
          <div>
            Model:
            <div>{{ time }}</div>
          </div>
        </v-row>
      </v-card-text>

      <v-btn class="ma-4" color="primary" @click="save">
        Save
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import TimeSelect from "./TimeSelect.vue";
const nowTime = new Date().toTimeString().substr(0, 5);
export default {
  components: { TimeSelect },
  data: () => ({
    time: nowTime,
  }),
  methods: {
    save() {
      this.$emit("save", this.time);
    },
  },
};
</script>

<style></style>
