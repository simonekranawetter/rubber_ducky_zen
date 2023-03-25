<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="Logo" />
      </router-link>
      <h1>Rubber Ducky Zen</h1>
    </div>
    <ul class="navlinks">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/zen">Zen</router-link></li>
      <li><router-link to="/rubberducky">Rubber Ducky</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Coiny&display=swap');
nav {
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  top: 0;
  min-width: 900px;
}
.logo {
  display: flex;
  align-items: center;
  padding-right: 1rem;
}
.logo img {
  max-width: 150px;
}
.logo h1 {
  font-size: 1.5rem;
  margin: 0;
  font-family: 'Coiny', cursive;
}
.navlinks {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: end;
}
li {
  margin-right: 10px;
}
li:last-child {
  margin-right: 0;
}
a {
  color: white;
  text-decoration: none;
}
.active {
  font-weight: bold;
}
</style>
