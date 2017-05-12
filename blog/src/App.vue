<template :style="niceStyle">
  <div id="app">
    <img src="./assets/logo.png">
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  /* eslint-disable no-new */
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
