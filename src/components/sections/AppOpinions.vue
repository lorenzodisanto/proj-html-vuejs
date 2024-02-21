<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Adam",
          image: "man1.png",
          text: "We are a gallery vehicle dealer: Before we met this site, our sales were sluggish.",
        },
        {
          name: "Cristian",
          image: "testimonial2-1.png",
          text: "One of the quality websites I apply to rent a car. There are hundreds of different tools.",
        },
        {
          name: "Robert",
          image: "man2.png",
          text: "I was trying to sell my car. And I put it here and sold it for more than it was worth.",
        },
        {
          name: "Elizabeth",
          image: "testimonial4-1.png",
          text: "A fast and reliable vehicle selling site. Rare quality websites with hundreds of model vehicles.",
        },
      ],
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
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="title">
        <img src="../../assets/img/thumbup1.jpg" alt="" />
        <h3>We Are Our Customers Saying?</h3>
        <p>Opinions from our happy customers.</p>
      </div>
      <div class="row g-3">
        <div class="col-md-6 col-lg-3" v-for="testimonial in testimonials">
          <div class="box">
            <p>{{ testimonial.text }}</p>
            <img :src="buildImagePath(testimonial.image)" alt="" />
            <p>{{ testimonial.name }}</p>
            <div class="box-decoration">
              <font-awesome-icon icon="fa-solid fa-quote-right" />
            </div>
          </div>
        </div>
      </div>
      <div class="slider-container">
        <div class="slider active"></div>
        <div class="slider"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
  background-image: url(../../assets/img/comment-bg-autocar.jpg);
  text-align: center;
  padding-bottom: 50px;

  .title {
    color: $white;
    padding: 40px;

    img {
      margin: 20px;
    }
  }
  .box {
    padding: 50px 30px;
    border-radius: 10px;
    position: relative;
    z-index: 0;

    img {
      width: 100px;
      margin: 25px;
    }

    .box-decoration {
      position: absolute;
      top: 15%;
      left: 40%;
      transform: rotate(10deg);
      font-size: 5rem;
      color: #edebf6;
      z-index: -1;
    }
  }

  .slider-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .slider {
      width: 50px;
      height: 8px;
      background-color: $white;
      border-radius: 5px;
      margin: 5px;
    }
    .slider.active {
      background-color: $black;
      width: 100px;
    }
  }
}
</style>
