<script>
export default {
  data() {
    return {
      articles: [
        {
          name: "Why is BMW loved?",
          date: "06.07.2022 - Auto Car",
          image: "news-autocar-1.jpg",
          text: "BMWs have a different line with their designs and almost [...]",
        },
        {
          name: "How solid is Audi?",
          date: "06.07.2022 - Auto Car",
          image: "news-autocar-2.jpg",
          text: "According to Euro NCAP data with different test organizations, there [...]",
        },
        {
          name: "What brand is Skoda?",
          date: "06.07.2022 - Auto Car",
          image: "news-autocar-6.jpg",
          text: "Skoda is one of the leading automotive manufacturers on the [...]",
        },
        {
          name: "Is the Auris diesel",
          date: "06.07.2022 - Auto Car",
          image: "news-autocar-5.jpg",
          text: "You will have a quieter vehicle that burns less than [...]",
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
        <div class="thumbup">
          <img src="../../assets/img/thumbup2.jpg" alt="" />
        </div>
        <h3>Resent Articles</h3>
        <p>Useful indormation about car.</p>
      </div>
      <div class="row g-3">
        <div class="col-md-6 col-lg-3" v-for="article in articles">
          <div class="box">
            <div>
              <img :src="buildImagePath(article.image)" alt="" />
              <p>{{ article.date }}</p>
              <h5>{{ article.name }}</h5>
              <p>{{ article.text }}</p>
            </div>
            <div class="touch-container">
              <div class="touch touch-black">
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;

section {
  background-color: $bg-color;
  margin-bottom: 50px;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    .thumbup {
      background-color: $black;
      margin-top: 40px;
      padding: 10px;
      width: 110px;
      height: 110px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      img {
        height: 75px;
      }
    }
  }
  .box {
    font-size: 0.9rem;
    border-radius: 10px;
    padding: 30px;
  }
}
</style>
