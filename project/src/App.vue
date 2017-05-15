<template>
  <div id="app">
    <header-component />
    
    <router-view></router-view>
    <footer-component />
  </div>
</template>

<script>
//import components
import HeaderComponent from '@/components/Header';
import FooterComponent from '@/components/Footer';
import LoginComponent from '@/components/Login';

export default {
  name: 'app',
  components: {
    HeaderComponent, FooterComponent
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}



</style>
