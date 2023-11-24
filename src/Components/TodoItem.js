import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4 className='mt-3'>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>
        <i className='fa fa-solid fa-trash'></i>
      </button>
    </div>
  )
}
