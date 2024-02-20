<script>
export default {
  data() {
    return {
      filters: [
        {
          name: "Keywords",
        },
        {
          name: "Location",
        },
        {
          name: "All Categories",
          keys: ["Cabrio", "Coupe", "Hatchback", "Pick Up", "Sedan", "SUV"],
        },
        {
          name: "Brand",
          keys: ["BMW", "Seat", "Volkswagen"],
        },
        {
          name: "Fuel Type",
          keys: ["Electric", "Diesel", "Gasoline"],
        },
        {
          name: "Transmission",
          keys: ["Auto", "Manual"],
        },
        {
          name: "Status",
          keys: ["Available", "Not available"],
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <div class="container-search">
      <div class="search-col" v-for="filter in filters">
        <div>
          <select class="touch touch-white" aria-label="Default select example">
            <option selected>{{ filter.name }}</option>
            <option v-for="key in filter.keys">{{ key }}</option>
          </select>
        </div>
      </div>
      <div class="touch touch-black">Search</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
  padding-top: 20px;

  .container-search {
    display: flex;
    justify-content: center;
    gap: 10px;
    .search-col {
      width: calc(100% / 8);
    }

    .touch-black {
      border-radius: 5px;
    }
  }
}
</style>
