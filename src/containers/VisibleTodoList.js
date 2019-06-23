import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "all":
      return todos
    case "completed":
      return todos.filter(t => t.completed)
    case "active":
      return todos.filter(t => !t.completed)
    default:
     //   return todos;
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state,ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


/* export class VisibleTodoList extends React.Component {

  componentDidMount() {
    this.unsubsribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    this.unsubsribe();
  }
  render() {
    const state = store.getState()
    return (
      <TodoList
        todos={
          getVisibleTodos({ todos: state.todos, visibilityFilter: state.visibilityFilter })
        }
        onTodoClick={(id) => {
          store.dispatch({
            type: "TOGGLE_TODO",
            id
          })
        }}
      />
    )
  }
} */