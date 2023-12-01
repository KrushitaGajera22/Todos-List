import React from 'react'
import { TodoItem } from "../Components/TodoItem";

export const Todos = (props) => {
  const style = {
    border: '1px solid lightgray',
    borderRadius: '20px',
    padding: '50px',
    minHeight: '40vh'
  }
  return (
    <div className='container my-3' style={style}>
      <h3 className='text-center'>Todos List</h3>
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
