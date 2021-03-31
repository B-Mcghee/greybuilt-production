<template>
  <v-input hide-details class="time-select" :color="color">
    <template v-if="label" v-slot:label>
      <div class="caption">{{ label }}</div>
    </template>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn outlined class="time-hours" :color="color" v-on="on">
          <span>{{ value ? hour : "H" }}</span>
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item
          v-for="hr in 12"
          :key="hr"
          class="pr-0 pl-2"
          @click="hour = hr === 1 ? 12 : hr - 1"
          >{{ hr === 1 ? 12 : hr - 1 }}
        </v-list-item>
      </v-list>
    </v-menu>
    <div class="">:</div>
    <v-menu
      v-model="minMenu"
      offset-y
      max-height="80vh"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on: menu }">
        <v-btn outlined class="time-minutes" :color="color" v-on="menu">
          <span>{{ value ? minute : "M" }}</span>
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item
          v-for="min in minuteList"
          :key="min"
          class="pr-0 pl-2"
          @click="onMinuteClick(min)"
        >
          <span>{{ min }}</span>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn-toggle v-model="isAm" class="toggle-am-pm" :color="color">
      <v-btn :value="true" class="btn-am">am</v-btn>
      <v-btn :value="false" class="btn-pm">pm</v-btn>
    </v-btn-toggle>
  </v-input>
</template>

<script>
export default {
  name: "TimeSelect",
  props: {
    alwaysShow: {
      type: Array,
      default: () => [0, 15, 30, 45],
    },
    color: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: "Time",
    },
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      expandedMinutes: null,
      minMenu: false,
    };
  },
  computed: {
    hour24() {
      if (!this.$props.value) return 12;
      return Number(this.$props.value.split(":")[0]);
    },
    hour: {
      get() {
        return this.hour24 % 12 === 0 ? 12 : this.hour24 % 12;
      },
      set(value) {
        if (value) {
          const hr = `${(value === 12 ? 0 : value) +
            (this.isAm ? 0 : 12)}`.padStart(2, "0");
          this.$emit("input", `${hr}:${this.minute}`);
        }
      },
    },
    expandedStart() {
      return this.expandedMinutes
        ? parseInt(this.expandedMinutes.split("-")[1])
        : -1;
    },
    expandedEnd() {
      return this.expandedMinutes
        ? parseInt(this.expandedMinutes.split("-")[2])
        : -1;
    },
    minuteList() {
      return ["00", "15", "30", "45"];
    },
    minute: {
      get() {
        if (!this.$props.value) return "00";
        return this.$props.value.split(":")[1].replace(/\D+/g, "");
      },
      set(value) {
        this.$emit("input", `${("" + this.hour24).padStart(2, "00")}:${value}`);
      },
    },
    isAm: {
      get() {
        return this.hour24 < 12;
      },
      set(toAm) {
        if (toAm === undefined || toAm === this.isAm) return; // avoid if not changing
        const hr = `${this.hour24 + (toAm ? -12 : 12)}`.padStart(2, "0");
        this.$emit("input", `${hr}:${this.minute}`);
      },
    },
  },
  methods: {
    onMinuteClick(min) {
      this.minMenu = false;

      this.minute = min;
    },
    getMinuteClass(min) {
      return this.alwaysShow.includes(parseInt(min)) ? "font-weight-bold" : "";
    },
  },
};
</script>

<style></style>
