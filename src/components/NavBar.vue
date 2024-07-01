<template>
  <nav>
    <router-link to="/aufgabe1">Aufgabe 1</router-link> |
    <router-link to="/aufgabe2">Aufgabe 2</router-link> |
    <router-link to="/aufgabe3">Aufgabe 3</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
nav {
  font-size: 24px;
}
nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-active {
  font-weight: bold;
  color: #35495e;
}
</style>
