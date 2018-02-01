<template>
<div id="login" class="container">
<h1>Projekt Pool</h1>
<a @click="changeType('sign-in')">Sign In</a><a @click="changeType('sign-up')">Sign Up</a>
<div v-if="type === 'sign-in'">
    <SignIn />
</div>
<div v-else>
    <SignUp />
</div>
</div>
</template>

<script>
//@ts-check

import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue';
export default {
    data() {
        return {
            type: 'sign-in'
        }
    },
    components: {
        SignIn, SignUp
    },
    methods: {
        changeType(type){
            if(type === 'sign-in'){
                this.type = 'sign-in';
            }else {
                this.type = 'sign-up'
            }

            console.log(event.target);
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

  width: 416px;
  height:  580px;
  color: #fff;
}
a {
    text-transform: uppercase;
}
a:first-of-type {
    border-bottom: 3px solid rgb(50, 207, 255);
    margin-right: 10rem;
    
}

h1 {
    text-align: center;
}

input[type="checkbox"].form-check-input {
  border: 0px;
  background-color: #fff;
}

input >>>{
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  color: white;
}
button>>>{
    border-radius: 50px;
    width: 100%;
}
</style>
