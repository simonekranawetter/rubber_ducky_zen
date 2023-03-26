<template>
  <div class="inner">
    <nav>
      <img src="../assets/logo.png" alt="" />
      <a href="#" class="logo">Rubber Ducky Zen</a>
      <input type="checkbox" id="nav" /><label for="nav"></label>
      <ul class="navigation">
        <li class="list-item">
          <router-link to="/" class="links">Home</router-link>
        </li>
        <li class="list-item">
          <router-link to="/imposter" class="links"
            >Imposter Syndrome Buster</router-link
          >
        </li>
        <li class="list-item">
          <router-link to="/rubberducky" class="links"
            >Rubber Ducky</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Coiny&display=swap");

.inner {
  max-width: 1000px;
  margin: 0;
  padding: 10px;
  position: relative;
}
nav {
  display: flex;
  padding-top: 20px;
}
.logo {
  color: var(--yellow);
  font-weight: 800;
  font-size: 20px;
}
nav > img {
  height: 40px;
  padding-right: 10px;
}

nav > ul > li {
  text-align: center;
  line-height: 40px;
  margin-left: 70px;
  list-style-type: none;
}

nav ul li:hover {
  cursor: pointer;
  position: relative;
}

.list-item {
  float: left;
  text-decoration: none;
}
nav a {
  font-family: "Coiny", cursive;
  color: var(--medium-blue);
}
nav a:active {
  color: var(--light-blue);
}
nav > ul li ul {
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 2000;
}
[type="checkbox"],
label {
  display: none;
}

@media screen and (max-width: 768px) {
  nav ul {
    display: none;
  }
  label {
    display: block;
    background: #222;
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 0px;
    padding-top: 25px;
  }
  label:after {
    content: "";
    display: block;
    width: 30px;
    height: 5px;
    background: #777;
    margin: 7px 5px;
    box-shadow: 0px 10px 0px #777, 0px 20px 0px #777;
  }
  [type="checkbox"]:checked ~ ul {
    display: block;
    z-index: 9999;
    position: absolute;
    right: 20px;
    left: 20px;
    padding-top: 30px;
  }
  nav a {
    color: var(--medium-blue);
  }
  nav ul li {
    display: block;
    float: none;
    width: 100%;
    text-align: left;
    background: var(--dark-background);
    text-indent: 20px;
  }
  nav > ul > li {
    margin-left: 0px;
  }
  nav > ul li ul li {
    display: block;
    float: none;
  }
  nav > ul li ul {
    display: block;
    position: relative;
    width: 100%;
    z-index: 9999;
    float: none;
  }
  h1 {
    font-size: 26px;
  }
}
</style>
