 <template>
   <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" role="presentation">
        <a :href="'#' + list.id" :aria-controls="list.id" role="tab" data-toggle="tab">{{ list.title }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" class="tab-pane" role="tabpanel" :id="list.id">
        <shopping-list-component :title="list.title" :items="list.items"></shopping-list-component>
      </div>
    </div>
  </div>
</template>



     <transition name="fade">
     
      
     </transition>
     
   </div>
</template>


<!--template with jade -->
<!--
<template lang="jade">
  div#app.container
    h2
      span {{ 'Shopping choices' | uppercase | addspace }}
      controls-component
    state-title-component(v-bind:isworking='isworking')
    countdown-component
    kittens-component(v-show="!isworking" transition="fade")
</template>
-->

<script>
import ShoppingListComponent from './components/ShoppingListComponent'

  /* eslint-disable no-new */

export default {
    components: {
      ShoppingListComponent
    },
    data () {
      return {
        shoppinglists: [
          {
            id: 'groceries',
            title: 'Groceries',
            items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }]
          },
          {
            id: 'clothes',
            title: 'Clothes',
            items: [{ text: 'black dress', checked: false }, { text: 'all stars', checked: false }]
          }
        ]
      }
    }
  }
</script>


<!--start with style-->
<style>
.container {
    width: 40%;
    margin: 20px auto 0px auto;
  }
</style>

