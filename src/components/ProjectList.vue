<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        ><div>
          <v-hover v-slot="{ hover }">
            <v-card
              max-width="600px"
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              :to="{ name: 'ProjectItem', params: { id: project.id } }"
            >
              <v-img
                :src="require(`../assets/${project.coverImage}`)"
                aspect-ratio="1"
                ><v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out lightPrimary v-card--revea overlay justify-center text-h2 darkestPrimary--text align-center"
                    style="height: 100%;"
                    @click="overlay = !overlay"
                  >
                    {{ project.title }}
                  </div>
                </v-expand-transition></v-img
              >
            </v-card>
          </v-hover>
        </div>
        <!-- <project-list-item
          :project="item"
          class="d-flex child-flex"
        ></project-list-item> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import ProjectListItem from "../ProjectListItem.vue";
export default {
  props: {
    projects: {
      type: Array,
    },
  },
  // components: { ProjectListItem },
  data: () => ({
    absolute: true,
    opacity: 1,
    overlay: false,
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>

<style>
.overlay {
  opacity: 0.75;
  cursor: pointer;
}
.overflow {
  height: 100vh;
  overflow: visible;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
