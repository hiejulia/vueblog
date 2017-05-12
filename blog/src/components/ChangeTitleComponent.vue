<template>
  <div>
    <em>Change title</em>
    <input type="text" placeholder="Type the changed title here" :value="value" @input="onInput({ title: $event.target.value, id: id })">
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    props: ['title', 'id'],
    methods: mapActions({
      onInput: 'changeTitle'
    })
  }
  
</script>

<style scoped>
</style>