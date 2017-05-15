<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">BlogKIT</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
        <router-link to="/"><a class="nav-link">Home</a></router-link>
      </li>
      
      <li class="nav-item">
        <router-link to="/login" v-if="!user.authenticated"><a class="nav-link">Login</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/register" v-if="!user.authenticated"><a class="nav-link">Register</a></router-link>
      </li>
     
      <li class="nav-item">
        <a href="#" @click="logout()" v-if="user.authenticated" class="nav-link">Log Out</a>
      </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import auth from '../auth/auth';
import LoginComponent from '@/components/Login';
export default {
  name: 'HeaderComponent',
  component:'LoginComponent',
  data() {
    return {
      user: auth.user//user 
    }
  },
  methods: {//log out
    logout() {
      auth.logout(this)
    }
  }
};
</script>

<style scoped lang="css">
</style>