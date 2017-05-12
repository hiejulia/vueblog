<template>
  <div>
    <div class="input-group">
      <input type="text" class="input form-control" placeholder="add shopping list item" @keyup.enter="addItem" v-model="newItem" >
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="addItem">Add!</button>
      </span>
    </div>
  </div>
</template>

<script>
  
    export default {
    props: ['id'],
    data () {
      return {
        newItem: ''
      }
    },
    methods: {
      addItem () {
        var text
        text = this.newItem.trim()
        if (text) {
          this.$emit('add', this.newItem)
          this.newItem = ''
          this.$store.dispatch('updateList', this.id)
        }
      }
    }
  }
</script>

<style scoped>
</style>