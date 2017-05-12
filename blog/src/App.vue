 <template>
   <div id="app" class="container">
     <img src="./assets/logo.png">
    <h2>{{ title }}</h2>
  <add-item-component></add-item-component>
  <items-component :items="items"></items-component>
  <div class="footer">
    <hr/>
    <change-title-component v-model="title"></change-title-component>
  </div>
     <template id="add-item-template">
  <div class="input-group">
    <input @keyup.enter="addItem" v-model="newItem" placeholder="add shopping list item" type="text" class="form-control">
    <span class="input-group-btn">
      <button @click="addItem" class="btn btn-default" type="button">Add!</button>
    </span>
  </div>
</template>

<!--list item template-->
<template id="item-template">
  <li :class="{ 'removed': item.checked }">
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="item.checked"> {{ item.text }}
      </label>
    </div>
  </li>
</template>

<!--items list template-->
<template id="items-template">
  <ul>
    <item-component v-for="item in items" :item="item"></item-component>
  </ul>
</template>

<!--change title template-->
<template id="change-title-template">
  <div>
    <em>Change the title of your shopping list here</em>
    <input v-bind:value="value" v-on:input="onInput"/>
  </div>
</template>




     <transition name="fade">
     
      
     </transition>
     
   </div>
</template>

<script>
import AddItemComponent from './components/AddItemComponent'
import ItemsComponent from './components/ItemsComponent'
import ChangeTitleComponent from './components/ChangeTitleComponent'

export default {
  /* eslint-disable no-new */

components: {
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent
  },

  data () {
    return {
        msg: 'Hello!',
        items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }]

      }
  }
}
</script>


<!--start with style-->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

