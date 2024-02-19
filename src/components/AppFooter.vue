<script>
export default {
  props: {
    menus: Array,
  },
};
</script>

<template>
  <footer>
    <div class="footer-container">
      <!-- <font-awesome-icon icon="fa-brands fa-instagram" />
      <font-awesome-icon icon="fa-brands fa-facebook-f" />
      <font-awesome-icon icon="fa-brands fa-twitter" /> -->

      <div v-for="menu in menus">
        <h3>{{ menu.title }}</h3>
        <ul>
          <li v-for="link in menu.links">
            <a :href="link.url">- {{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
footer {
  background-color: $black;
  color: $white;
  display: flex;
  justify-content: center;

  .footer-container {
    width: 1400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 50px;

    h3 {
      padding-left: 0;
    }

    ul {
      list-style: none;

      a {
        color: $white;
      }
    }
  }
}
</style>
