<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndDown"
      transition="slide-y-transition"
      v-model="drawer"
      bottom
      temporary
      app
      disable-resize-watcher
      height="250px"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item
            v-for="(tab, i) in tabs"
            :key="i"
            :to="{ name: tab.name }"
          >
            <v-list-item-title v-text="tab.name"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <navigation @drawer="toggleDrawer"></navigation>
    <transition name="slide" mode="out-in">
      <v-main>
        <router-view></router-view>
      </v-main>
    </transition>
    <v-footer fixed bottom></v-footer>
  </v-app>
</template>

<script>
import Navigation from "./components/layouts/Navigation.vue";

export default {
  name: "App",

  components: {
    Navigation,
  },

  data: () => ({
    drawer: false,
    group: null,
    tabs: [
      { name: "Home" },
      { name: "About" },
      { name: "Projects" },
      { name: "Floor Plans" },
      { name: "Contact Us" },
    ],
  }),
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
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
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
