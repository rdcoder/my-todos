import { connect } from 'react-redux';
//import { withRouter } from 'react-router'; // at least 3.0 or above
import { toggleTodo } from '../actions';
//import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all': // SHOW_ALL   
      return todos;
    case 'completed': // SHOW_COMPLETED
      return todos.filter(t => t.completed);
    case 'active': // SHOW_ACTIVE
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state.todos,
    ownProps.filter
  ),
});

//const mapDispatchToProps = (dispatch) => {
//  return {
//    onTodoClick: (id) => {
//      dispatch(toggleTodo(id));
//    },
//  };
//};

const VisibleTodoList = connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList);

export default VisibleTodoList;