import React from 'react'
import { TodoItem } from "../Components/TodoItem";

export const Todos = (props) => {
  const style = {
    minHeight: "51vh",
  }
  return (
    <div className='container' style={style}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos Available" : 
        props.todos.map((todo) =>{
          return (
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          )
        })
      }
    </div>
  )
}
