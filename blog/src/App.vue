 <template>
   <div id="app" class="container">
     <img src="./assets/logo.png">
     <h1>Shopping List</h1>
     <p>{{msg}}</p>
     <add-item-component></add-item-component>
     <items-component :items="items">
     </items-component>
    

 <change-title-component></change-title-component>

     <transition name="fade">
     
      
     </transitin>
     
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

