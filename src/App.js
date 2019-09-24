import React from 'react';
import Todo from './Todos';
import AddTodo from './AddTodo';


class App extends React.Component {
    state = {
      todos: [
        {id: 1, content:'Build a portfolio Site for alexido.world'},
        {id: 2, content:'Look for better temp jobs'}
      ]
    };

    deleteTodos = (id) =>{
     const todos = this.state.todos.filter(todo =>{
       return todo.id !==id
     });
     this.setState({
       todos
     })
    }

    addTodo = (todo) =>{
      todo.id = Math.random();

      let todos = [...this.state.todos, todo]
      this.setState({
        todos
      })
    }


    render(){
      return (
        <div className="todo-app container">
        <h1 className="center blue-text">TODOS</h1>
        <AddTodo addTodo = {this.addTodo} />
        <Todo todos = {this.state.todos} deleteTodos={this.deleteTodos}/>
        </div>
      );
    }
  }
  

export default App;
