<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store,
      headerLinks: [
        {
          text: "Home",
          url: "#",
          current: false,
        },
        {
          text: "About Us",
          url: "#",
          current: false,
        },
        {
          text: "Vehicles",
          url: "#",
          current: false,
        },
        {
          text: "Dealers",
          url: "#",
          current: false,
        },
        {
          text: "Packages",
          url: "#",
          current: false,
        },
        {
          text: "Blog",
          url: "#",
          current: false,
        },
        {
          text: "Contact",
          url: "#",
          current: false,
        },
      ],

      footerMenus: [
        {
          title: "My Account",
          links: [
            {
              url: "#",
              text: "My Account",
            },
            {
              url: "#",
              text: "Checkout",
            },
            {
              url: "#",
              text: "Cart",
            },
            {
              url: "#",
              text: "Packages",
            },
            {
              url: "#",
              text: "Add Car",
            },
          ],
        },
        {
          title: "Quick Links",
          links: [
            {
              url: "#",
              text: "Home",
            },
            {
              url: "#",
              text: "About Us",
            },
            {
              url: "#",
              text: "Blog",
            },
            {
              url: "#",
              text: "Contact",
            },
            {
              url: "#",
              text: "Refund & Returns",
            },
          ],
        },
      ],
    };
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <app-header :links="headerLinks"></app-header>
  <app-main> </app-main>
  <app-footer :menus="footerMenus"></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
