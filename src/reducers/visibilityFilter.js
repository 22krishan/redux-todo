import { VisibilityFilters } from '../actions'


//state="SHOW_ALL"---> State of that visibilityfilter field in the application
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter