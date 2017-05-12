<template>
  <div id="container">
    <p>This is App1 Component</p>
    <story v-bind:story="{plot:'a',writer:'b'}" >
    </story>
    
  </div>
</template>

<script>
export default {
  name: 'app1'
}
</script>

<style>
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
