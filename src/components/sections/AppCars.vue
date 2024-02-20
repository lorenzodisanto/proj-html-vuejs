<script>
import AppSearch from "./AppSearch.vue";
export default {
  data() {
    return {
      cars: [
        {
          name: "BMW M9",
          image:
            "bmw-8-series-convertible-technical-data-sp-desktop-400x300.jpg",
          category: "Cabrio",
          price: 34000,
          brand: "BMW",
          fuel: "Electric",
          transmission: "Auto",
          status: true,
        },
        {
          name: "BMW M8",
          image: "bmw88-400x300.jpg",
          category: "Cabrio",
          price: 34000,
          brand: "BMW",
          fuel: "Diesel",
          transmission: "Auto",
          status: true,
        },
        {
          name: "BMW 4",
          image: "bmw442-400x300.jpg",
          category: "Cabrio",
          price: 34000,
          brand: "BMW",
          fuel: "Gasoline",
          transmission: "Manual",
          status: true,
        },
        {
          name: "Seat Ibiza",
          image: "yeni-ibiza-2-400x300.jpg",
          category: "Hatchback",
          price: 27000,
          brand: "Seat",
          fuel: "Electric",
          transmission: "Auto",
          status: true,
        },
        {
          name: "Seat Arona",
          image: "makyajli-2022-seat-arona-1-400x300.jpg",
          category: "SUV",
          price: 68000,
          brand: "Seat",
          fuel: "Gasoline",
          transmission: "Auto",
          status: true,
        },
        {
          name: "Volkswagen Taigo",
          image: "vw-taigo3832-400x300.jpg",
          category: "SUV",
          price: 52000,
          brand: "Volkswagen",
          fuel: "Electric",
          transmission: "Auto",
          status: true,
        },
        {
          name: "Volkswagen T-Cross",
          image: "2019-vw-t-cross-400x300.jpg",
          category: "SUV",
          price: 47000,
          brand: "Volkswagen",
          fuel: "Diesel",
          transmission: "Manual",
          status: true,
        },
        {
          name: "Volkswagen Passat",
          image: "volkswagen-passat-1280x720-1-400x300.jpg",
          category: "Sedan",
          price: 32000,
          brand: "Volkswagen",
          fuel: "Diesel",
          transmission: "Manual",
          status: true,
        },
      ],

      carCategories: [
        {
          name: "Cabrio",
          image: "cabrio.jpg",
          listings: "..",
        },
        {
          name: "Coupe",
          image: "coupe.jpg",
          listings: "..",
        },
        {
          name: "Hatchback",
          image: "hatchback.jpg",
          listings: "..",
        },
        {
          name: "Pick Up",
          image: "pickup.jpg",
          listings: "..",
        },
        {
          name: "Sedan",
          image: "sedan.jpg",
          listings: "..",
        },
        {
          name: "SUV",
          image: "suv.jpg",
          listings: "..",
        },
      ],
    };
  },

  components: { AppSearch },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL(
        "../../assets/img/" + imageName,
        import.meta.url
      );
      return imageUrl.href;
    },
  },
};
</script>

<template>
  <section>
    <div class="container">
      <app-search></app-search>
      <div class="row my-4">
        <div
          class="col-6 col-md-4 col-lg-2 p-0"
          v-for="carCategory in carCategories"
        >
          <div class="box">
            <img :src="buildImagePath(carCategory.image)" alt="" />
            <p>
              {{ carCategory.name }}
            </p>
            <p>{{ carCategory.listings }} Listings</p>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-lg-4 col-xl-3 p-0" v-for="car in cars">
          <div class="box">
            <img :src="buildImagePath(car.image)" alt="" />
            <p>
              {{ car.name }}
              <font-awesome-icon
                v-if="car.status"
                icon="fa-solid fa-check"
                class="icon-round"
              />
              <font-awesome-icon
                v-if="!car.status"
                icon="fa-solid fa-xmark"
                class="icon-round"
              />
            </p>
            <p>{{ car.category }}</p>
            <span
              ><font-awesome-icon icon="fa-solid fa-dollar-sign" />
              {{ car.price }}</span
            >
            <span
              ><font-awesome-icon icon="fa-solid fa-car" />
              {{ car.brand }}</span
            >
            <span
              ><font-awesome-icon icon="fa-solid fa-gas-pump" />
              {{ car.fuel }}</span
            >
          </div>
        </div>
      </div>
      <div class="touch-container">
        <div class="touch touch-black">
          <span>
            Show all Cars <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.box {
  padding: 20px;

  .icon-round {
    background-color: $black;
    color: $white;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    padding: 1px;
  }
  span {
    margin-right: 10px;
  }
}
</style>
