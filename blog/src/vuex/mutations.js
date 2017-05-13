import * as types from './mutation_types'
import getters from './getters'
import _ from 'underscore'

// function findById(state,id) {
//     return _.findWhere(state.shoppinglists, { id: id })
// }

export default {
    //change title
    [types.CHANGE_TITLE ](state, data) {
        getters.getListById(state, data.id).title = data.title
    },
//fetch shopping lists
    [types.POPULATE_SHOPPING_LISTS] (state, lists) {
    state.shoppinglists = lists.sort((d1,d2) => {
      (d1.id - d2.id) 
    })
  },
  //add new shopping list
  [types.ADD_SHOPPING_LIST] (state, newList) {
    if (_.isObject(newList)) {
      state.shoppinglists.push(newList)
    }
  },
  //delete
  [types.DELETE_SHOPPING_LIST] (state, id) {
    state.shoppinglists = _.reject(state.shoppinglists, (list) => {
      return list.id === id
    })
  }

}


