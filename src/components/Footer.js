import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

// const Footer = () => (
//   <div>
//     <span>Show: </span>
//     <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
//     <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
//     <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
//   </div>
// )

//Implementing using Rreact router
const Footer = () => (
    <div>
      <span>Show: </span>
      <FilterLink filter="all">All</FilterLink>
      <FilterLink filter="active">Active</FilterLink>
      <FilterLink filter="completed">Completed</FilterLink>
    </div>
  )
  

export default Footer