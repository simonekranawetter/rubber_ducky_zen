<template>
  <div class="container">
    <div class="smaller-container">
      <div class="quote">
        <h2>{{ quote }}</h2>
      </div>
    </div>
    <a href="#" @click="fetchNewQuote">Click me!
      <img src="../assets/unicornduck.png" alt="">
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImposterSyndrome",
  data() {
    return {
      quote: "",
    };
  },
  methods: {
    async getRandomQuote(): Promise<string> {
      const response = await fetch("/affimations.txt");
      const text = await response.text();
      const QUOTES = text.split("\n");
      const index = Math.floor(Math.random() * QUOTES.length);
      console.log(response);
      return QUOTES[index];
    },
    async fetchNewQuote() {
      this.quote = await this.getRandomQuote();
    },
  },
  async mounted() {
    this.quote = await this.getRandomQuote();
  },
});
</script>
<style scoped>
.container {
  max-width: 1000px;
  border-radius: 20px;
  padding: 40px 0px;
}
.quote {
  display: flex;
  text-align: center;
  padding: 20px;
  font-size: large;
  color: var(--light-blue);
}
.smaller-container {
  display: flex;
  justify-content: center;
}
a {
  border-radius: 8px;
  padding: 10px;
  color: var(--dark-background);
  background-color: var(--light-blue);
}
img {
  height: 30px;
  margin: -10px;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
}
@media screen and (max-width: 768px) {
  .container{
    padding-top: 5px;
    display: block;
  }
}
</style>
