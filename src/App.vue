<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/heroes">Heroes</router-link>
    </div>
    <router-view/>

    <footer class="footer">
      <div class="footer-section">Designed and built by: Jaylan Snelson</div>
    </footer>
  </div>
</template>

<style>
:root {
  --light-colored-bg: #4C5A69;
  --main-bg: #293C4E;
}

html {
  height: 100%;
  margin: 0;
}
body #app {
  background: var(--main-bg);
  height: 100%;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

#nav {
  padding: 30px;
  background: var(--light-colored-bg);
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  background: var(--light-colored-bg);
  bottom: 0;
  height: 50px;
  left: 0;
  position: fixed;
  width: 100%;
  color: #fff;
}
.footer .footer-section {
  width: 100%;
  text-align: left;
}
</style>
