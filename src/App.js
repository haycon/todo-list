import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log('yes');
  }

  render() {
    const todoList = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        text={item.text}
        handleChange={this.handleChange}
      />
    ));
    return (
      <div>
        <h1>Something</h1>
        {todoList}
      </div>
    );
  }
}

export default App;
