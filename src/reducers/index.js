import { combineReducers } from 'redux';
import todos from './todos';
//import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos
  //visibilityFilter,
});

export default todoApp;
/*
export const getVisibleTodos = (state, filter) => 
	fromTodos.getVisibleTodos(state.todos, filter);
	*/