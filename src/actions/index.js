const uuidv1 = require('uuid/v1');

let nextID = 0;

export const addTodo = (input) => {
  return {
    type: "ADD_TODO",
    text: input,
    id: uuidv1()
  }
}

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  }
}

export const setVisiblityFilter = (filter) => {
  return {
    type: "SET_VISIBILTY_FILTER",
    filter: filter
  }
}


//this one is copied 
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}