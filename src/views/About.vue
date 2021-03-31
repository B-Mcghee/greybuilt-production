<template>
  <div>
    <div class="text-h3 text-center my-8">Meet Our Leadership</div>
    <div>
      <bio-list> </bio-list>
    </div>
  </div>
</template>

<script>
import BioList from "../components/layouts/BioList.vue";
export default {
  props: {
    bios: {
      type: Array,
    },
  },
  components: { BioList },
};
</script>

<style></style>
