import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Link } from "@reach/router";
import './App.css';
import Add from './components/Add/Add';
import Inventory from './components/Inventory.js';
import { ADD_BOOK } from "./store/reducer.js";

function App() {
  const dispatch = useDispatch();
  const books = useSelector(state=>state.reducer.books)

  useEffect(()=>{
    fetch("https://clockworkjava.pl/books.php")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(book => {
          dispatch({type: ADD_BOOK, payload: book})
        })
    });       
},[])

  return (
    <div>
      <Link to="/">
        <h1>React bookstore</h1>
      </Link>
      <Router>
        <Add path="/admin"/>
        <Inventory books={books} path="/"/>
      </Router>
    </div>
  );
}

export default App;
