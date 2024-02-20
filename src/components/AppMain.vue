<script>
import AppHero from "./sections/AppHero.vue";
import AppCars from "./sections/AppCars.vue";
import AppKnowUs from "./sections/AppKnowUs.vue";

import AppOpinions from "./sections/AppOpinions.vue";
import AppArticles from "./sections/AppArticles.vue";

export default {
  data() {
    return {};
  },
  components: { AppHero, AppCars, AppKnowUs, AppOpinions, AppArticles },
};
</script>

<template>
  <app-hero></app-hero>
  <app-cars></app-cars>
  <app-know-us></app-know-us>
  <app-opinions></app-opinions>
  <app-articles></app-articles>
</template>

<style lang="scss" scoped></style>
