import "./App.css";
import Header from "./Components/Header";
import { AddTodo } from "./Components/AddTodo";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import React, { useState, useEffect } from "react";
import { About } from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  let [todos, setTodos] = useState( initTodo
    // {
    //   sno: 1,
    //   title: "Go To Market",
    //   desc: "You need to go to the market"
    // },
    // {
    //   sno: 2,
    //   title: "Buy New SmartPhone",
    //   desc: "You need to buy the new Smartphone"
    // },
    // {
    //   sno: 3,
    //   title: "Go For Shopping",
    //   desc: "You need to do some shopping"
    // },
  )
  
  const onDelete = (todo)=>{
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    let sno;
    if(todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])

  }
  
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Router>
      <Header title = "My Todos List"/>

      <Routes>
      <Route exact path='/' element={<><AddTodo addTodo={addTodo}/> <Todos todos={todos} onDelete={onDelete}/></>}></Route> 
          <Route exact path='/about' element={< About />}></Route> 
        </Routes>

      <Footer />
    </Router>
    </>
  );
}

export default App;
