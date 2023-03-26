<template>
  <div class="container">
    <div class="ducky">
      <h2>Debug Support</h2>
      <div class="ducky-pic"><img src="../assets/ducky.png" alt="" /></div>
      <p>... a ducky helping you debug will soon be with you!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RubberDucky",
});
</script>
<style scoped>
.container {
  max-width: 1000px;
  margin: 20px;
  border-radius: 20px;
}
img {
  border-radius: 18px;
}
@media screen and (max-width: 768px) {
  .container {
    display: block;
  }
  img {
    width: 300px;
  }
}
</style>
