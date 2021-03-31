<template>
  <div>
    <v-app-bar app dense flat color="primary" dark>
      <v-app-bar-nav-icon class="ml-10" @click.stop="drawer">
        <logo-name></logo-name>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div>
        <template v-if="$vuetify.breakpoint.smAndDown">
          <v-app-bar-nav-icon @click.stop="drawer"></v-app-bar-nav-icon>
        </template>

        <template v-else>
          <v-tabs
            v-model="tab"
            icons-and-text
            background-color="primary"
            height="100%"
          >
            <v-tabs-slider color="white"></v-tabs-slider>
            <v-tab
              :to="{ name: tab.name }"
              v-for="(tab, i) in tabs"
              :key="i"
              :value="tab.name"
              class="white--text mb-1"
              >{{ tab.name }}</v-tab
            >
          </v-tabs>
        </template>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import LogoName from "../UI/LogoName";
export default {
  components: {
    LogoName,
  },
  data: () => ({
    tab: null,
    tabs: [
      { name: "Home" },
      { name: "About" },
      { name: "Projects" },
      { name: "Floor Plans" },
      { name: "Contact Us" },
    ],
  }),
  methods: {
    drawer() {
      this.$emit("drawer");
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 2s, transform 2s;
}

.drawer-enter,
.drawer-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
