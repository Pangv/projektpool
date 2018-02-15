<template>
<div id="sign-in">
<form v-on:submit.prevent>
    <div class="form-group">
    <label for="inputEmail">Email Adresse</label>
    <input type="email" class="form-control" id="inputEmail" autocomplete="true" aria-describedby="emailHelp" placeholder="Email Adresse eingeben" v-model="email">
    <small id="emailHelp" class="form-text text-muted">Wir werden deine Mail mit niemanden teilen. Versprochen.</small>
  </div>
  
  <div class="form-group">
    <label for="inputPassword">Passwort</label>
    <input type="password" class="form-control" id="inputPassword" autocomplete="true" placeholder="Passwort" v-model="password">
  </div>

 <div class="form-check">
    <input type="checkbox" class="form-check-input" id="keep-signed">
    <label class="form-check-label" for="keep-signed">angemeldet bleiben</label>
  </div>
  <button type="submit" class="btn btn-primary" @click="signIn">Anmelden</button>
  <button type="submit" class="btn btn-secondary" @click="forgotPassword">Passwort vergessen?</button>
</form>  
</div>
</template>

<script>
import { mapState } from "vuex";
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: mapState({
    count: state => state.count
  }),
  methods: {
    signIn() {
      const email = this.email;
      const password = this.password;
      const promise = firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      promise.then(user => {
        this.$router.replace("dashboard");
      });
      promise.catch(error => console.log(error.message));
      let user = firebase.auth();
      console.log(user);
    },

    forgotPassword() {
      const email = this.email;
      firebase
        .auth()
        .sendPasswordResetEmail()
        .then(function() {
          // something happened
        })
        .catch(function(error) {});
    }
  }
};
</script>

<style scoped>

</style>
