<template>
  <div id="app">
    <header>
      
    </header>
    <main class="container">
      <router-view class="row justify-content-center"></router-view>
    </main>
  </div>
</template>

<script>
import Firebase from "firebase";

let config = {
  apiKey: "AIzaSyC50SbWcqYE-M6mGrqudrXfX4bYk7xcylk",
  authDomain: "v-rentazubi.firebaseapp.com",
  databaseURL: "https://v-rentazubi.firebaseio.com",
  projectId: "v-rentazubi",
  storageBucket: "v-rentazubi.appspot.com",
  messagingSenderId: "1023136654744"
};

let firebase = Firebase.initializeApp(config);
let db = firebase.database();

let projectRef = db.ref("projects");

export default {
  name: "app",
  firebase: {
    projects: projectRef
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin-top: 40px;
}
</style>
