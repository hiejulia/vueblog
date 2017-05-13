<template>
  <div>
    <div class="input-group">
      <label>
        <input type="text" class="input form-control" placeholder="add shopping list item" @keyup.enter="addItem" v-model="newItem">
      </label>
  
      <fieldset>
        <legend>Choose your animal</legend>
        <select v-model="clan">
          <option v-for="(types, clan) in clans">{{clan}}</option>
        </select>
        <select v-model="type">
          <option v-for="(species, type) in clans[clan]">{{type}}</option>
        </select>
        <select v-if="clans[clan]">
          <option v-for="(animals, species) in clans[clan][type]">{{species}}</option>
        </select>
  
      </fieldset>
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="addItem">Add!</button>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['id'],
  data() {
    return {
      newItem: '',
      clan: undefined,
      type: undefined,
      clans: {
        mammalia: {
          'have fingers': {
            human: 'human',
            chimpanzee: 'chimpanzee'
          },
          fingerless: {
            cat: 'cat',
            bear: 'bear'
          }
        },
        birds: {
          flying: {
            eagle: 'eagle',
            pidgeon: 'pidgeon'
          },
          'non flying': {
            chicken: 'chicken'
          }
        }
      }
    }
  },
  methods: {
    addItem() {
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