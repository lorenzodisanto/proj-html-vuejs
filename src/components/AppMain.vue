<script>
import AppHero from "./sections/AppHero.vue";
export default {
  data() {
    return {};
  },
  components: { AppHero },
};
</script>

<template>
  <app-hero></app-hero>
</template>

<style lang="scss" scoped>
main {
  border: 1px dashed red;
  padding: 200px;
  text-align: center;
}
</style>
