import React from 'react';

const Todos = ({todos, deleteTodos}) =>{
    const todosList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key ={todo.id}>
                    <span onClick={()=> {deleteTodos(todo.id)}}>{todo.content}</span>
                </div>
            )
    })): (
        <p className="center">You have no Todos!</p>
    )

    return(
        <div className="todos collection">
            {todosList}
        </div>
    )
}

export default Todos;