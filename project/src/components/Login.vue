<template>
  <div>
      <div class="col-sm-4 col-sm-offset-4">
      <h2>Log In</h2>
      <p>Log in to your account to get some great quotes.</p>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <input 
          type="text" 
          class="form-control"
          placeholder="Enter your email"
          
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
         
        >
      </div>
      <button class="btn btn-primary" >Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style scoped>
</style>