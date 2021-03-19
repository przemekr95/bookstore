import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import './App.css';
import Add from './components/Add/Add';
import Inventory from './components/Inventory.js';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch("https://clockworkjava.pl/books.php")
    .then(response => {
        return response.json();
    })
    .then(data => {
        setBooks(data)
    });       
},[])

  return (
    <div>
      <Link to="/">
        <h1>React bookstore</h1>
      </Link>
      <Router>
        <Add books={books} setBooks={setBooks} path="/admin"/>
        <Inventory books={books} path="/"/>
      </Router>
    </div>
  );
}

export default App;
