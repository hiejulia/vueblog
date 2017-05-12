import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS, ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST } from './mutation_types'
import api from '../api'//get api from server
import getters from './getters'//getters from vuex 

export default {
    //change title
     changeTitle: (store, data) => {
    store.commit(CHANGE_TITLE, data)//commit action to store 
    return store.dispatch('updateList', data.id)//dispatch 
  },

//update list
updateList: (store, id) => {
    let shoppingList = getters.getListById(store.state, id)//get list by id from vuex

    return api.updateShoppingList(shoppingList)
  },

    //fetch all
populateShoppingLists: ({ commit }) => {
    return api.fetchShoppingLists().then(response => {
      commit(POPULATE_SHOPPING_LISTS, response.data)//commit change
    })
  },


    //add one
    createShoppingList: (store, shoppinglist) => {
    return api.addNewShoppingList(shoppinglist).then(() => {//fetch from server
      store.dispatch('populateShoppingLists')//dispatch pu
    }, () => {
      store.commit(ADD_SHOPPING_LIST, shoppinglist)//commit to the store
    })
  },




    //delete one 
    deleteShoppingList: (store, id) => {
    return api.deleteShoppingList(id).then(() => {
      store.dispatch('populateShoppingLists')//populate to fetch shopping list
    }, () => {
      store.commit(DELETE_SHOPPING_LIST, id)// tell with store
    })
  }
}
