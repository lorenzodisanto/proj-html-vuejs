<script>
export default {
  props: {
    links: Array,
  },
};
</script>

<template>
  <header>
    <div class="container-header">
      <div>
        <img src="../assets/img/logo-autocar11.png" alt="" />
      </div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="link in links">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="btn-header">
        <img src="../assets/padlock.png" alt="" />
        <span>My Account</span>
      </div>
      <div class="btn-header">
        <img src="../assets/add.png" alt="" />
        <span>Add Car</span>
      </div>
      <div class="menu">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
      <div class="btn-header">
        <img src="../assets/headphones.png" alt="" />
        <span>+1(234)567 89 10</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
header {
  background-color: $bg-color;
  color: $black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1400px;

    img {
      width: 200px;
      padding-top: 5px;
    }

    li {
      display: inline-block;
      padding: 10px;

      a {
        color: $black;
      }
    }

    .btn-header {
      background-color: $black;
      height: 70px;
      color: $white;
      border-radius: 5px;
      padding: 10px;
      font-size: 1.2rem;
      font-weight: 500;
      cursor: pointer;

      img {
        width: auto;
        height: 90%;
        filter: invert(100%);
        padding-right: 5px;
      }
    }

    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
    }
  }
}

@media screen and (max-width: 1400px) {
  span {
    font-size: 0.9rem;
  }

  .menu {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 992px) {
  .btn-header span {
    display: none;
  }
}
</style>
