<template>
  <div>
    <em>Change title</em>
    <input type="text" placeholder="Type the changed title here" :value="value" @input="onInput">
  </div>
</template>

<script>
  export default {
     props: ['value],
     methods: {
         onInput(event) {
             this.$emit('input',event.target.value)

         }
     }
  }
</script>

<style scoped>
</style>