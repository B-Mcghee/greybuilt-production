<template>
  <div>
    <div class="text-center banner d-flex justify-center align-center">
      <h2 class="banner-content text-h2 darkestPrimary--text">
        Our Work
      </h2>
    </div>
    <div class="my-10">
      <project-list :projects="projects"></project-list>
    </div>
  </div>
</template>

<script>
import ProjectList from "../components/ProjectList.vue";
export default {
  components: { ProjectList },
  data: () => ({
    projects: [
      {
        id: 1,
        title: "Corydon",
        description:
          "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
        cover_image: "Home.jpg",
        images: ["forsale.jpg", "Home.jpg", "side.jpg"],
        sq_footage: "1,456",
        showProject: true,
      },
      {
        id: 2,
        title: "Louisville",
        description:
          "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
        cover_image: "forsale.jpg",
        images: ["forsale.jpg", "Home.jpg", "side.jpg"],
        sq_footage: "1,956",
        showProject: true,
      },
      {
        id: 3,
        title: "Sellersburg",
        description:
          "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
        cover_image: "forsale.jpg",
        images: ["forsale.jpg", "Home.jpg", "side.jpg"],
        sq_footage: "3,456",
        showProject: true,
      },
      {
        id: 4,
        title: "Corydon",
        description:
          "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
        cover_image: "Home.jpg",
        images: ["forsale.jpg", "Home.jpg", "side.jpg"],
        sq_footage: "1,456",
        showProject: true,
      },
      {
        id: 5,
        title: "Louisville",
        description:
          "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
        cover_image: "forsale.jpg",
        images: ["forsale.jpg", "Home.jpg", "side.jpg"],
        sq_footage: "1,956",
        showProject: true,
      },
      {
        id: 6,
        title: "Sellersburg",
        description:
          "This project holds dear to Greybuilt, because it was the first opportunity someone trusted us in building their dream home and they love it",
        cover_image: "forsale.jpg",
        images: ["forsale.jpg", "Home.jpg", "side.jpg"],
        sq_footage: "3,456",
        showProject: true,
      },
    ],
  }),
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
