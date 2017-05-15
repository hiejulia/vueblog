<template lang="jade"> 
  h1 {{ msg }} 
</template> 


<style lang="sass" scoped> 
  $red: red; 
  h1 { 
    color: $red; 
  } 
</style> 


<script lang="coffee"> 
 exports.default = data: -> 
 { msg: 'Hello!' } 
</script> 