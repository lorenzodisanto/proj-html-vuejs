<script></script>

<template>
  <section>
    <div class="container">
      <div class="car">
        <img src="../../assets/img/aoutcar-about-1.png" alt="" />
        <div class="circle circle-left">
          <h3>24</h3>
          <span>Years of</span>
          <span>Experience</span>
        </div>
        <div class="circle circle-right">
          <h3>240</h3>
          <span>Special expert</span>
          <span>Team</span>
        </div>
        <div class="circle-car">
          <img src="../../assets/img/circle-auto-car-1.png" alt="" />
        </div>
      </div>
      <div class="car-text">
        <h3>Want to buy or sell a vehicle?</h3>
        <p>
          You can put your vehicles for sale by registering on our website.
          Whether you are a dealer or sell personally. Sell your vehicle in the
          most profitable way. With this system, which has millions of members,
          you will be able to buy and sell vehicles quickly.
        </p>
        <img src="../../assets/img/divider.jpg" alt="" />
        <div class="text-description">
          <div class="icon-car">
            <img src="../../assets/img/icon-car1.jpg" alt="" />
          </div>
          <div class="icon-car-text">
            <h4>Model Vehicles</h4>
            <p>
              We are sure that you will find vehicles of suitable models on our
              website.
            </p>
          </div>
        </div>
        <div class="text-description">
          <div class="icon-car">
            <img src="../../assets/img/icon-car2.jpg" alt="" />
          </div>

          <div class="icon-car-text">
            <h4>2nd Hand Vehicles</h4>
            <p>
              You can put your used vehicles for sale by adding them to our
              website.
            </p>
          </div>
        </div>
        <div class="touch-container">
          <div class="touch touch-black">
            <span
              >Get to know us <font-awesome-icon icon="fa-solid fa-arrow-right"
            /></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
.container {
  display: flex;
  padding: 40px 0;
  .car {
    position: relative;

    .circle {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: $black;
      color: $white;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      padding: 25px;
      font-size: 1.3rem;
      font-weight: 700;

      h3 {
        font-size: 3rem;
      }
    }

    .circle.circle-left {
      top: 5%;
      left: 10%;
    }

    .circle.circle-right {
      bottom: 5%;
      right: 10%;
    }

    .circle-car {
      position: absolute;
      top: 0;
      z-index: -1;
    }
  }
  .car-text {
    padding: 40px;

    .text-description {
      margin-top: 20px;
      display: flex;
    }
    .touch-container {
      justify-content: flex-start;
    }
  }
}

@media screen and (max-width: 1400px) {
  .container {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 768px) {
  .car {
    img {
      width: 500px;
    }
  }
}
</style>
