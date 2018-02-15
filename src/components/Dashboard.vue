<template>
  <div class="hello">
    <Nav></Nav>
    <h1>Erfolgreich eingeloggt</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  components: {
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
}


</style>
