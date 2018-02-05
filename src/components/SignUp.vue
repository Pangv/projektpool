<template>
<form action="">
    <div class="form-group">
    <label for="inputEmail">Anmeldename</label>
    <input type="email" class="form-control" id="inputEmail" autocomplete="true" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">Wir werden dein Mail mit niemanden teilen</small>
  </div>

  <div class="form-group">
    <label for="inputPassword">Passwort</label>
    <input type="password" class="form-control" id="inputPassword" autocomplete="true" placeholder="Password" v-model="password">
  </div>

  <div class="form-group">
    <label for="checkPassword">Passwort wiederholen</label>
    <input type="password" class="form-control" id="checkPassword" autocomplete="true" placeholder="Password" v-model="checkpassword">
  </div>
  
   <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Tutor</label>
  </div>
  
  <button type="submit" class="btn btn-primary" @click="signUp">Registrieren</button>
</form>  
</template>

<script>
import firebase from "firebase";
export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: "",
      checkpassword: ""
    };
  },
  methods: {
    signUp() {
      const email = this.email;
      const password = this.password;
      const password2 = this.checkpassword;
      if (password === password2) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(function(error) {
            console.error(error.message);
            let errorCode = error.code;
            let errorMessage = error.message;
          });
      } else {
        console.error('Passwörter stimmen nicht überein')
      }
    }
  }
};
</script>

<style scoped>

</style>
