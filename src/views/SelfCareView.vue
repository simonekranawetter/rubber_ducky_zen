<template>
  <div class="container">
    <div class="smaller-container">
      <div class="debug-ducky">
        <img src="../assets/unicornducky.png" alt="" />
        <div class="ducky-quote">
          <p>{{ quote }}</p>
        </div>
      </div>
    </div>
    <div class="help">
      <button class="button" @click="fetchNewQuote">Get more!</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 800px;
  margin: auto;
  border-radius: 20px;
}
.ducky-quote{
  position: relative;
  background-color: var(--light-blue);
  color: var(--dark-blue);
  font-weight: 500;
  font-style: normal;
  padding: 10px;
  border-radius: .4em;
  z-index: -1;
}
.ducky-quote::after{
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 15px solid transparent;
	border-right-color: var(--light-blue);
	border-left: 0;
	border-top: 0;
	margin-top: -7.5px;
	margin-left: -15px;
}
.smaller-container{
  display: grid;
}
img {
  height: 80px;
  padding-right: 10px;
  padding-top: 10px;
  margin-left: 40px;
}
.debug-ducky {
  display: flex;
  justify-content: center;
  padding: 20px;
  font-weight: 600;
  font-style: italic;
  max-width: 800px;
}
#debug {
  justify-self: center;
  width: 80%;
  border: 1px solid var(--light-blue);
  border-radius: 18px;
  font-weight: 600;
  color: var(--light-blue);
  padding: 20px;
  line-height: 1.5;
  background-color: var(--dark-background);
}
.help {
  padding-top: 20px;
}
.button {
  background-color: var(--light-blue);
  color: var(--dark-blue);
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
    background-color: var(--light-blue);
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
