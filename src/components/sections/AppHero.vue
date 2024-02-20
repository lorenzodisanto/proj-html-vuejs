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
          <div class="text">
            <h2>Buy And Sell Your Car At Its Value</h2>
            <p>Find the right price and dealer.</p>
            <div class="touch-container">
              <div class="touch touch-black">
                <span
                  >Learn More <font-awesome-icon icon="fa-solid fa-arrow-right"
                /></span>
              </div>
            </div>
          </div>
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
  color: $white;

  .carousel-container {
    width: 100%;
    position: relative;

    .slides {
      position: relative;

      img {
        width: 100%;
        height: 800px;
        object-fit: cover;
      }

      .text {
        position: absolute;
        width: 600px;
        top: 250px;
        left: 15%;
        h2 {
          font-size: 4rem;
        }

        p {
          font-size: 1.5rem;
        }
        .touch-container {
          justify-content: flex-start;
        }
      }
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
