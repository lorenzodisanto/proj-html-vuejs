<script>
import AppHero from "./sections/AppHero.vue";
import AppOpinions from "./sections/AppOpinions.vue";
import AppArticles from "./sections/AppArticles.vue";

export default {
  data() {
    return {};
  },
  components: { AppHero, AppOpinions, AppArticles },
};
</script>

<template>
  <app-hero></app-hero>
  <app-opinions></app-opinions>
  <app-articles></app-articles>
</template>

<style lang="scss" scoped>
main {
  border: 1px dashed red;
  padding: 200px;
  text-align: center;
}
</style>
