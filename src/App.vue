<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>| 
      <router-link to="/Ejemplovue">Ejemplovue</router-link> |
      <router-link to="/Ejemplo">Ejemplo</router-link> |
      <router-link to="/Ejemplo2">Ejemplo2</router-link>|
      <router-link to="/vif">vif</router-link>|
      <router-link to="/vifor">vifor</router-link>|
      <router-link to="/vinodel">vinodel</router-link>|
      <router-link to="/von">von</router-link>|

    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
