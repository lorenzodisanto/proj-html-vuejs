<script>
export default {
  props: {
    menus: Array,
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="mt-5">
        <img src="../assets/img/logo-footer-autocar11.png" alt="" />
        <div class="contacts">
          <p class="pt-3">
            <font-awesome-icon
              icon="fa-solid fa-location-dot"
              class="fs-2 me-2"
            />
            New Jersey, USA
          </p>
        </div>
        <div class="contacts">
          <p>
            <font-awesome-icon icon="fa-solid fa-phone-volume" class="fs-2" />
            +1(234)5678910
          </p>
        </div>
        <div class="contacts">
          <p>
            <font-awesome-icon icon="fa-regular fa-envelope" class="fs-2" />
            example@example.com
          </p>
        </div>
        <div class="text-center">
          <font-awesome-icon icon="fa-brands fa-facebook-f" class="fs-2 px-3" />
          <font-awesome-icon icon="fa-brands fa-instagram" class="fs-2 px-3" />
          <font-awesome-icon icon="fa-brands fa-twitter" class="fs-2 px-3" />
        </div>
      </div>
      <div class="mt-5">
        <h3>Join Our Newsletter</h3>
        <p>Subscribe to be informed about our services and products.</p>
        <form>
          <input
            type="email"
            class="touch touch-white"
            id="InputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your Email Address"
          />
          <button type="submit" class="touch touch-white">
            Subscribe <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </button>
        </form>
      </div>

      <div v-for="menu in menus">
        <h3>{{ menu.title }}</h3>
        <ul>
          <li v-for="link in menu.links">
            <a :href="link.url">- {{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <p>
        <font-awesome-icon icon="fa-regular fa-copyright" /> 2022 Autocar - All
        Rights Reserved
      </p>
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
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    img {
      width: 200px;
    }

    input,
    button {
      width: 100%;
      margin-bottom: 5px;
    }

    h3 {
      padding-left: 0;
    }
    p {
      font-size: 1.1rem;
    }

    ul {
      list-style: none;

      a {
        color: $white;
        font-weight: 400;
      }
    }
  }

  .right {
    padding-top: 60px;
  }
}
</style>
