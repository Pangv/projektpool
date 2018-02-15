<template>
  <div id="login">
    <h1>Projekt Pool</h1>
    <div>
      <div id="links">
        <a id="sign-in" @click="changeType" class="active">Sign In</a>
        <a id="sign-up" @click="changeType">Sign Up</a>
      </div>
    </div>
    <div v-if="type === 'sign-in'">
        <SignIn/>
    </div>
    <div v-else>
        <SignUp />
    </div>
  </div>
</template>

<script>
//@ts-check

import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";
export default {
  data() {
    return {
      type: "sign-in"
    };
  },
  components: {
    SignIn,
    SignUp
  },
  methods: {
    changeType(event) {
      const signIn = document.getElementById("sign-in");
      const signUp = document.getElementById("sign-up");
      if (this.type === "sign-up" && event.target.id === "sign-in") {
        this.type = "sign-in";
        signIn.classList.toggle("active");
        signUp.classList.toggle("active");
      } else if (this.type === "sign-in" && event.target.id === "sign-up") {
        this.type = "sign-up";
        signIn.classList.toggle("active");
        signUp.classList.toggle("active");
      }
    }
  }
};
</script>


<style>
#login {
  background-color: #fff;
  background: url("../assets/diego.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  max-width: 416px;
  height: 580px;
  color: #fff;
}
#links {
  margin-bottom: 1rem;
}
a {
  text-transform: uppercase;
  margin-right: 8rem;
  border-bottom: 0px;

  /*Underline Transition*/
  transition-property: border-bottom;
  transition-timing-function: ease;
  transition-duration: 200ms;
}
a.active {
  border-bottom: 3px solid rgb(50, 207, 255);
}

h1 {
  text-align: center;
}

input[type="checkbox"].form-check-input {
  border: 0px;
  background-color: #fff;
}

input {
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  color: white;
}
button {
  border-radius: 50px;
  margin-bottom: 0.5rem;
  max-width: 100%;
}
</style>
