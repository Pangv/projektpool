<template>
<form action="">
    <div class="form-group">
    <label for="exampleInputEmail1">Anmeldename</label>
    <input type="email" class="form-control" id="exampleInputEmail1" autocomplete="true" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Passwort</label>
    <input type="password" class="form-control" id="exampleInputPassword1" autocomplete="true" placeholder="Password">
  </div>

    <div class="form-group">
    <label for="exampleInputPassword1">Passwort wiederholen</label>
    <input type="password" class="form-control" id="exampleInputPassword1" autocomplete="true" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Registrieren</button>
</form>  
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
