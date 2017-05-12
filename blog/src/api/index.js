//server communication 
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)


const ShoppingListsResource = Vue.resource('http://localhost:3000/' + 'shoppinglists{/id}')

export default {
    //fetchshoppinglists
    fetchShoppingLists: () => {
        return ShoppingListsResource.get()
    },
    //add new shopping list
    addNewShoppingList: (data) => {
    return ShoppingListsResource.save(data)//add > save data
  },
  //update shopping list
  updateShoppingList: (data) => {
    return ShoppingListsResource.update({ id: data.id }, data)//update shopping list dbt by id 
  },
  //delete shopping list
  deleteShoppingList: (id) => {
    return ShoppingListsResource.remove({ id: id })
  }
}