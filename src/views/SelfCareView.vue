<template>
  <div class="container">
   <div class="quote">
      <span class="left"><img src="../assets/unicornducky.png" alt=""></span>
          <blockquote>{{ quote }}</blockquote>
    </div>
    <div class="help">
      <button class="button" @click="fetchNewQuote">Get more!</button>
    </div>   
  </div>

</template>
<style scoped>

.quote {
  text-align: center;
  font-size: 1.5rem;
  margin: auto;
  padding: 15px;
  border: 2px solid var(--yellow);
  border-radius: 8px;
  border-style: groove;
  max-width: 70%;
  position: relative;
  margin-top: 100px;
}
blockquote {
  color: var(--light-blue);
  text-shadow: -1px 1px var(--dark-blue);
  position: relative;
}
.left img {
  position: absolute;
  top: -50px;
  left: -20px;
  width: 100px;
  padding-bottom: 10px;
  text-align: left;
  font-size: 6rem;
  color: var(--dark-blue);
  background-color: var(--nav-background);
  line-height: 150px;
}
.help {
  padding-top: 40px;
}
.button {
  border: 1px solid var(--dark-blue);
  background-color: none;
  color: var(--dark-blue);
}
.button:hover {
  background-color: var(--light-blue);
  transition: 2ms;
  font-weight: 600;
  padding:  0.7em 1.3em;
}
.button:active {
  background-color: var(--dark-blue);
  border: 2px solid var(--yellow);
  color: var(--yellow);
}

@media screen and (max-width: 768px) {
  .container{
    width: 100vw;
    padding-top: 20px;
  }
  img {
    margin-left: -20px;
  }
}
@media (prefers-color-scheme: light){

  .button {
    border: 1px solid var(--dark-blue);
    background-color: none;
    color: var(--dark-background);
  }
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelfCare",
  data() {
    return {
      quote: "",
    };
  },
  methods: {
    async getRandomQuote(): Promise<string> {
      const response = await fetch(
        "https://raw.githubusercontent.com/jenniferlynparsons/selfcaretech/master/botgrammar.json"
      );
      const data = await response.json();
      const QUOTES = data.origin;
      const index = Math.floor(Math.random() * QUOTES.length);
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
