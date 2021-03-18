import './App.css';
import Book from './components/Book/Book.js';
import Add from './components/Add/Add';

function App() {
  return (
    <div>
      <h1>React bookstore</h1>
      <Add/>
      <Book title="Straż! Straż!" author="Terry Prachett" publicationDate="1989" genre="Fantastyka" audience="Młodzież"/>
      <Book title="Dwie wieże" author="J. R. R. Tolkien" publicationDate="1954" genre="Fantastyka" audience="Młodzież"/>
      <Book title="Komnata Tajemnic" author="J. K. Rowling" publicationDate="1998" genre="Fantastyka" audience="Młodzież"/>
    </div>
  );
}

export default App;
