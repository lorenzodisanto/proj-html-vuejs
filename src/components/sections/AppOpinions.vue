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
        <h3>We Are Our Customers Saying?</h3>
        <p>Opinions from our happy customers</p>
      </div>
      <div class="row">
        <div class="col" v-for="testimonial in testimonials">
          <div class="card">
            <p>{{ testimonial.text }}</p>
            <img :src="buildImagePath(testimonial.image)" alt="" />
            <p>{{ testimonial.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
  background-image: url(../../assets/img/comment-bg-autocar.jpg);
  text-align: center;
  padding: 100px;

  .title {
    color: $white;
    padding: 30px;
  }

  .card {
    color: $black;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100px;
      margin: 25px;
    }
  }
}
</style>
