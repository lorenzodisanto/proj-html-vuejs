<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <h1>{{ store.title }}</h1>
  <app-header></app-header>
  <app-main> </app-main>
  <app-footer></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
