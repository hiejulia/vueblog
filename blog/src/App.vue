 <template>
   <div id="app" class="container">
     <h2>{{advice}}</h2>
     <transition name="fade" enter-active-class="go" enter-class="mySlideInRight">
         
          <h1 v-show="!showSolution">{{title | capitalize}} - 🚕</h1>
          
        </transition>
        <tutorial-component :titlename="title"></tutorial-component>
     
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
  <!-- basic -->
    
    <icon name="refresh" spin scale="3"></icon>
    
    
    <br>
    <!-- stacked icons -->
    
    
    
  </div>

     
</template>
  
<script>
  import ShoppingListComponent from './components/ShoppingListComponent'
  import ShoppingListTitleComponent from './components/ShoppingListTitleComponent'
  import TutorialComponent from './components/TutorialComponent'
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
Vue.filter('capitalize', function (string) {
      var capitalFirst = string.charAt(0).toUpperCase()
      var noCaseTail = string.slice(1, string.length)
      return capitalFirst + noCaseTail
    })

  /* eslint-disable no-new */

export default {
  data () {
return {
  title:'shopping app',
  
        showSolution: false,
        advice:'loading...'
      
}
  },
    components: {
      ShoppingListComponent,
      ShoppingListTitleComponent,
      TutorialComponent
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
    },
    created(){
      axios.get('http://api.adviceslip.com/advice')
        .then(res => {
          this.advice = res.data.slip.advice;
        })
        .catch(error => {
            this.advice = 'There was an error: ' + error.message
          })
    }
  }
</script>


<!--start with style-->
<style>
.container {
    width: 40%;
    margin: 20px auto 0px auto;
  }
  .fade-enter-active {
      transition: opacity .5s;
      opacity: 1
    }
    
    .fade-enter {
      opacity: 0
    }

    .go {
      transition: all 2s ease-out;
      animation: rumble .5s linear 4;
    }

    @keyframes rumble {
      10% {
        margin-top: 20px
      }
      20% {
        margin-top: 15px
      }
      30% {
        margin-top: 20px
      }
      40% {
        margin-top: 15px
      }
      100% {
        margin-top: none
      }
    }
    .mySlideInRight {
      transform: translateX(200px);
    }
      .fade-enter-active, .fade-leave-active {
  transition: transform .5s
}
.fade-enter {
  transform: translateX(300px)
}
.fade-leave-active {
  transform: translateX(-300px);
}
    
</style>

