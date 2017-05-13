<template>
  <li :class="{ 'removed': item.checked }">
    
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="item.checked"> {{ item.text }}
      </label>
      <label>
        <textarea 
         v-model="txtAra"
        :class="{ warn: showme }"
        :maxlength="limit">
   </textarea>
      </label>

    </div>
  </li>
</template>

<script>
   import { mapActions } from 'vuex'
  export default {
    props: ['item', 'id'],
    data() {
      return {
    txtAra : 'This is the textarea',
    showme:false,
		limit : 50
      }
   
    },
    methods: mapActions(['updateList']),
    watch: {
      'item.checked': function () {
        this.updateList(this.id)
      }
    }
  }
</script>

<style scoped>
   .removed {
    color: gray;
  }
  .removed label {
    text-decoration: line-through;
  }
  li {
    list-style-type: none;
  }
  li span {
    margin-left: 5px;
  }

  .warn{
    background-color: mistyrose
  }
</style>
