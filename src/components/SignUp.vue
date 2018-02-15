<template>
<div id="sign-up">
<form v-on:submit.prevent="onSubmit">
    <div class="form-group">
    <label for="inputEmail">Email Adresse</label>
    <input type="email" class="form-control" id="inputEmail" autocomplete="true" aria-describedby="emailHelp" placeholder="Email Adress eingeben" v-model="email">
    <small id="emailHelp" class="form-text text-muted">Wir werden deine Mail mit niemanden teilen. Versprochen.</small>
  </div>

   <div class="form-group">
    <label for="inputName">Anmeldename</label>
    <input type="text" class="form-control" id="inputName" autocomplete="true" placeholder="007" v-model="loginName">
  </div>

  <div class="form-group">
    <label for="inputPassword">Passwort</label>
    <input type="password" class="form-control" id="inputPassword" autocomplete="false" placeholder="Passwort" v-model="password">
  </div>

  <div class="form-group">
    <label for="checkPassword">Passwort wiederholen</label>
    <input type="password" class="form-control" id="checkPassword" autocomplete="false" placeholder="Passwort" v-model="checkpassword">
  </div>
  
   <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Tutor</label>
  </div>
  
  <button type="submit" class="btn btn-primary" @click="signUp">Registrieren</button>
</form>  
</div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: "",
      checkpassword: "",
      loginName: ""
    };
  },
  methods: {
    signUp() {
      const email = this.email;
      const password = this.password;
      const password2 = this.checkpassword;
      const loginName = this.loginName;
      if (password === password2) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            this.$router.replace("/dashboard");
          })
          .catch(function(error) {
            console.error(error.message);
            let errorCode = error.code;
            let errorMessage = error.message;
          });
      } else {
        console.error("Passwörter stimmen nicht überein");
      }
    }
  }
};
</script>

<style scoped>

</style>
