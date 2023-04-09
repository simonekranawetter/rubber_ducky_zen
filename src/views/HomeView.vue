<template>
  <div class="container">
    <h1>Welcome to Rubber Ducky Zen</h1>
    <div class="welcome">
      <img src="../assets/zenducky.png" alt="" />
      <div class="text">
        <h3>The self-care app for developers</h3>
        <p>
          Welcome to Rubber Ducky Zen, the app that helps developers prioritize
          their mental health and wellbeing. Whether you're just starting out or
          you've been coding for years, we're here to help you find balance and
          relaxation in your busy life.
        </p>
      </div>
    </div>
    <div class="imposter">
      <img src="../assets/unicornducky.png" alt="" />
      <div class="text">
        <h3>Fight imposter syndrome and take care of yourself</h3>
        <p>
          It's not uncommon for developers to feel like they're not good enough
          or that they don't belong. That's why Rubber Ducky Zen includes a
          section dedicated to helping you fight imposter syndrome with self
          care tips form selfcaretech-ducky. With daily affirmations and
          motivational quotes, you can start each day feeling confident and
          ready to take on any challenge.
        </p>
      </div>
    </div>
    <div class="ducky">
      <img src="../assets/logo.png" alt="" />
      <div class="text">
        <h3>Get expert rubber ducky debugging support</h3>
        <p>
          We know that debugging can be frustrating, and sometimes you just need
          a second pair of eyes to help you solve a problem. That's why our
          expert rubber duckies are available 24/7 to provide you with debugging
          support and advice. Whether you're stuck on a coding problem or you
          just need to talk through a tough day, our team is here to support
          you.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
<style scoped>
.container {
  padding: 20px;
  max-width: 1000px;
}
.container p {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  color: var(--yellow);
}
h3 {
  font-style: italic;
  color: var(--medium-blue);
}
img {
  height: 150px;
}
.ducky,
.imposter,
.welcome {
  display: flex;
  padding: 20px;
}
.text {
  text-align: start;
  padding-left: 20px;
}
@media screen and (max-width: 768px) {
  .ducky,
  .imposter,
  .welcome {
    display: block;
  }
  h1 {
    font-size: large;
  }
}
</style>
