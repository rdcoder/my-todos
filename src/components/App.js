import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import logo from '../logo.svg';
import '../App.css';

const App = ({ params }) => (      
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React Todos with Redux</h2>
    </div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'all'}/>
    <Footer />
  </div>
);

export default App;
