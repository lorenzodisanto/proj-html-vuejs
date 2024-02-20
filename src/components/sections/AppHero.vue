<script>
export default {
  data() {
    return {
      activeSlide: 0,

      slides: ["slider-autocar-5.jpg", "slider-autocar-6.jpg"],
    };
  },

  methods: {
    buildImagePath(imageName) {
      const imageUrl = new URL(
        "../../assets/img/" + imageName,
        import.meta.url
      );
      return imageUrl.href;
    },

    nextClick() {
      if (this.activeSlide >= this.slides.length - 1) {
        this.activeSlide = 0;
      } else {
        this.activeSlide++;
      }
    },

    prevClick() {
      if (this.activeSlide <= 0) {
        this.activeSlide = this.slides.length - 1;
      } else {
        this.activeSlide--;
      }
    },
  },
};
</script>

<template>
  <section>
    <div class="wrapper">
      <div class="carousel-container">
        <div class="slides">
          <img :src="buildImagePath(slides[activeSlide])" alt="" />
        </div>
        <div class="arrow-next" @click="nextClick()">
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </div>
        <div class="arrow-previous" @click="prevClick()">
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.wrapper {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  .carousel-container {
    width: 100%;
    position: relative;

    .slides img {
      width: 100%;
      height: 800px;
      object-fit: cover;
    }

    .arrow-next,
    .arrow-previous {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 1.6rem;
      color: $white;
      top: 50%;
      text-align: center;
      position: absolute;
      cursor: pointer;
    }

    .arrow-next {
      right: 30px;
    }

    .arrow-previous {
      left: 30px;
    }
  }
}
</style>
