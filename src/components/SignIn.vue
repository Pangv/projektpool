<template>
<form action="">
    <div class="form-group">
    <label for="inputEmail">Anmeldename</label>
    <input type="email" class="form-control" id="inputEmail" autocomplete="true" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="inputPassword">Passwort</label>
    <input type="password" class="form-control" id="inputPassword" autocomplete="true" placeholder="Password" v-model="password">
  </div>

 <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">angemeldet bleiben</label>
  </div>
  <button type="submit" class="btn btn-primary" @click="signIn">Anmelden</button>
</form>  
</template>

<script>
import { mapState } from "vuex";
import firebase from 'firebase';

export default {
  data() {
    return {
      email : "",
      password: ""
    };
  },
  computed: mapState({
    count: state => state.count
  }),
  methods: {
    signIn(){
      const email = this.email;
      const password = this.password;
      const promise = firebase.auth().signInWithEmailAndPassword(email, password);
      promise.catch(error => console.log(error.message));
    }
  }
};
</script>

<style scoped>

</style>
