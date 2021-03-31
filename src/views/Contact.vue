<template>
  <div>
    <div class="text-center banner d-flex justify-center align-center">
      <h2 class="banner-content text-h2 darkestPrimary--text">
        Let's get Connected
      </h2>
    </div>
    <div>
      <contact-form></contact-form>
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/Form.vue";
export default {
  components: { ContactForm },
};
</script>

<style>
.banner {
  height: 15em;
  background-image: url("../assets/paper_flowers.jpg");
  background-position: center;
  background-size: cover;
}
</style>
