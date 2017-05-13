 <template>
   <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" role="presentation">
       <shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
      </li>
      <li>
        <a href="#" @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign"></i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" class="tab-pane" role="tabpanel" :id="list.id">
        <shopping-list-component :id="list.id" :title="list.title" :items="list.items"></shopping-list-component>
      </div>
    </div>
    <md-toolbar>
    <h1 class="md-title">My Title</h1>
  </md-toolbar>
   
  </div>

     
</template>
  
<script>
  import ShoppingListComponent from './components/ShoppingListComponent'
  import ShoppingListTitleComponent from './components/ShoppingListTitleComponent'
  import store from './vuex/store'
  import { mapGetters, mapActions } from 'vuex'
  import _ from 'underscore'

  import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.material.registerTheme({
  app: {
    primary: 'cyan'
  },
  about: {
    primary: 'indigo'
  },
  contact: {
    primary: 'teal'
  }
})


  /* eslint-disable no-new */

export default {
    components: {
      ShoppingListComponent,
      ShoppingListTitleComponent
    },
    computed:mapGetters({
      shoppinglists: 'getLists'
    }),
    methods: _.extend({}, mapActions(['populateShoppingLists', 'createShoppingList']), {
      addShoppingList () {
        let list = {
          title: 'New Shopping List',
          items: []
        }
        this.createShoppingList(list)
      }
    }),
    store,//get the store of shopping list 
    mounted () {
      this.populateShoppingLists()
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

