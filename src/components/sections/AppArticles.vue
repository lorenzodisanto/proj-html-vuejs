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
        <h3>Resent Articles</h3>
        <p>Useful indormation about car.</p>
      </div>
      <div class="row">
        <div class="col" v-for="article in articles">
          <div class="box-article">
            <div>
              <img :src="buildImagePath(article.image)" alt="" />
              <p>{{ article.date }}</p>
              <h5>{{ article.name }}</h5>
              <p>{{ article.text }}</p>
            </div>
            <div class="btn-container">
              <div class="btn-more">
                <p>More</p>
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
  background-color: #fbfbfb;
  padding: 100px;

  .title {
    text-align: center;
  }

  .box-article {
    padding: 30px;
    font-size: 0.9rem;
    background-color: $white;
    border-radius: 10px;
    box-shadow: 1px 2px 5px #dcdbdb;
    img {
      width: 100%;
    }

    .btn-container {
      display: flex;
      justify-content: center;
    }

    .btn-more {
      background-color: $black;
      width: 120px;
      height: 60px;
      line-height: 35px;
      vertical-align: middle;
      color: $white;
      text-align: center;
      padding: 10px;
      font-weight: 500;
      cursor: pointer;
    }
  }
}
</style>
