import React, { useState } from "react";

export const AddTodo = (props) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description is required')
        }else{
            props.addTodo(title, desc)
            setTitle('')
            setDesc('')
        }
    }
  return (
    <div className='container my-3'>
        <h3>Add Todo</h3>
        <form onSubmit={submit}>
        <div className="row g-3 align-items-center">
            <div className="col-auto mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} 
                className="form-control" id="title" />
            </div>
        </div>
        <div className="row g-3 align-items-center">
            <div className="col-auto mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} 
                className="form-control" id="desc"/>
            </div>
        </div>
            <button type="submit" className="btn btn-sm btn-success">Submit</button>
        </form>
    </div>
  )
}
