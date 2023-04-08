<template>
  <header id="navbar">
    <nav class="navbar-container container">
      <router-link to="/" class="navbar-link">
        <div class="navbar-logo">
          <img class="logo" src="../assets/logo.png" alt="">
        </div>
        <p class="logo-text">
          Rubber Ducky Zen
        </p>
        
      </router-link>
      <button
        type="button"
        id="navbar-toggle"
        aria-controls="navbar-menu"
        aria-label="Toggle menu"
        :aria-expanded="isNavbarOpen ? 'true' : 'false'"
        @click="toggleNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div
        id="navbar-menu"
        aria-labelledby="navbar-toggle"
        :class="{ opened: isNavbarOpen }"
        @click="closeNavbar">
        <ul class="navbar-links">
          <li class="navbar-item">
            <router-link to="/" class="navbar-link">Home</router-link>
          </li>
          <li class="navbar-item">
            <router-link to="/imposter" class="navbar-link"
              >Imposter Syndrome Buster</router-link
            >
          </li>
          <li class="navbar-item">
            <router-link to="/rubberducky" class="navbar-link"
              >Rubber Ducky</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}
.container {
  width: 100vw;
  padding: 0.5rem 1rem 0.5rem 0rem;
  margin: 0 auto;
}
#navbar {
  left: 0;
  right: 0;
  background-color: var(--nav-background);
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}
.navbar-item {
  margin: 0.4em;
  width: 100%;
}

.home-link,
.navbar-link {
  color: var(--light-blue);
  text-decoration: none;
  display: flex;
  font-weight: 800;
  align-items: center;
}
.logo-text {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: var(--yellow);
  font-size: larger;
}

.home-link:is(:focus, :hover) {
  color: var(--yellow);
}

.navbar-link {
  justify-content: left;
  width: 100%;
  padding: 0.4em 0.5em;
  border-radius: 5px;
  white-space: nowrap;
}

.navbar-link:is(:focus, :hover) {
  color: var(--yellow);
  background-color: var(--nav-background);
}
.navbar-logo {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-inline-start: 0.5em;
  padding: 10px;
  margin-right: 10px;
}
.logo{
  height: 40px;
  margin-top: -14px;
  margin-left: -12px;
}
#navbar-toggle {
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.icon-bar {
  display: block;
  width: 25px;
  height: 4px;
  margin: 2px;
  background-color: var(--yellow);
}

#navbar-toggle:is(:focus, :hover) .icon-bar {
  background-color: var(--light-blue);
}
#navbar-toggle[aria-expanded='true'] .icon-bar:is(:first-child, :last-child) {
  position: absolute;
  margin: 0;
  width: 30px;
}

#navbar-toggle[aria-expanded='true'] .icon-bar:first-child {
  transform: rotate(45deg);
}

#navbar-toggle[aria-expanded='true'] .icon-bar:nth-child(2) {
  opacity: 0;
}

#navbar-toggle[aria-expanded='true'] .icon-bar:last-child {
  transform: rotate(-45deg);
}
#navbar-menu {
  position: fixed;
  top: 60px;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  left: 0;
  right: 0;
}
#navbar-toggle[aria-expanded='true'] + #navbar-menu {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  visibility: visible;
}
.navbar-links {
  list-style: none;
  position: absolute;
  background-color: var(--nav-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  right: 0;
  margin: 1.4rem;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

#navbar-toggle[aria-expanded='true'] + #navbar-menu .navbar-links {
  padding: 1em;
}
@media screen and (min-width: 700px) {
  .container{
    width: 1000px;
  }
  #navbar-toggle,
  #navbar-toggle[aria-expanded='true'] {
    display: none;
  }

  #navbar-menu,
  #navbar-toggle[aria-expanded='true'] + #navbar-menu {
    visibility: visible;
    opacity: 1;
    position: static;
    display: block;
    height: 100%;
  }

  .navbar-links,
  #navbar-toggle[aria-expanded='true'] + #navbar-menu .navbar-links {
    margin: 0;
    padding: 0;
    box-shadow: none;
    position: static;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: var(--nav-background);
  }
}
</style>
<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
      const navbarToggle = document.getElementById("navbar-toggle");
      const ariaExpanded = this.isNavbarOpen ? "true" : "false";
      navbarToggle.setAttribute("aria-expanded", ariaExpanded);
    },
    closeNavbar() {
      this.isNavbarOpen = false;
      const navbarToggle = document.getElementById("navbar-toggle");
      navbarToggle.setAttribute("aria-expanded", "false");
    },
  },
};

</script>
