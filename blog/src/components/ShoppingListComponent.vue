<template>
<div>
  <transition
    @enter="enter"
    @leave="leave"
    :css="false"
  >
    <h2>{{ title }}</h2>
  </transition>

    <add-item-component @add="addItem" :id="id"></add-item-component>
    <items-component :items="items" :id="id"></items-component>
    <div class="footer">
      <hr />
      <change-title-component v-model="title" :id="id"></change-title-component>
    </div>
</div>



</template>




<script>
 import AddItemComponent from './AddItemComponent'
  import ItemsComponent from './ItemsComponent'
  import ChangeTitleComponent from './ChangeTitleComponent'
  export default {
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
    },
    props: ['id', 'title', 'items'],
    methods: {
      addItem (text) {
        this.items.push({
          text: text,
          checked: false
        })
      },
      enter (el, done) {
      Velocity(el, 
      { opacity: [1, 0], translateX: ["0px", "200px"] },
      { duration: 2000, easing: "ease-out", complete: done })
    },
    leave (el, done) {
    	Velocity(el,
      { opacity: [0, 1], 'font-size': ['0.1em', '1em'] },
      { duration: 200, complete: done })
    }
    }
  }
</script>

<style scoped>
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>