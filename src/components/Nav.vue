<template>
  <ul>
      <li><a @click="signOut">Logout</a></li>
  </ul>
</template>


<script>
import firebase from 'firebase';

export default {
  data(){
      return {

      }
  },
  methods: {
      signOut() {
          firebase.auth().signOut().then(() => {
              this.$router.replace('login');
          }).catch((error) => {
              console.error(error);
              
          })
      }
  }
}
</script>

<style scoped>

</style>
