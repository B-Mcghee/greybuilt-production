<template>
  <div>
    <div class="text-center banner d-flex justify-center align-center">
      <h2 class="banner-content text-h2 darkestPrimary--text">
        Our Work
      </h2>
    </div>
    <div class="my-10">
      <project-list :projects="allProjects"></project-list>
    </div>
  </div>
</template>

<script>
import ProjectList from "../components/ProjectList.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { ProjectList },
  data: () => ({}),

  methods: {
    ...mapActions(["fetchProjects"]),
  },
  computed: { ...mapGetters(["allProjects"]) },
  created() {
    this.fetchProjects();
  },
};
</script>

<style>
.banner {
  height: 15em;
  background-image: url("../assets/blueprint.jpg");
  background-position: center;
  background-size: cover;
}
</style>
