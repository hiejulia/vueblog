<template>
  <div>
   </div>
</template>

<script>

  export default {
    props: ['title', 'id'],
    methods: mapActions({
      onInput: 'changeTitle'
    })
  }
  
</script>

<style scoped>
</style>