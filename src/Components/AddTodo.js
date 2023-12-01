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
    const style = {
        border: '1px solid lightgray',
        borderRadius: '20px',
        padding: '50px',
        
    }
  return (
    <div className='container my-3' style={style}>
        <h3 className="text-center">Add Todo</h3>
        <form onSubmit={submit}>
            <div className="col-auto mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} 
                className="form-control" id="title" />
            </div>
            <div className="col-auto mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} 
                className="form-control" id="desc"/>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-sm btn-success w-25 fw-bold">Submit</button>
            </div>
        </form>
    </div>
  )
}
