import './App.css';
import Book from './components/Book/Book.js';

function App() {
  return (
    <div>
      <h1>React bookstore</h1>
      <Book title="Straż! Straż!" author="Terry Prachett" publicationDate="1989"/>
      <Book title="Dwie wieże" author="J. R. R. Tolkien" publicationDate="1954"/>
      <Book title="Komnata Tajemnic" author="J. K. Rowling" publicationDate="1998"/>
    </div>
  );
}

export default App;
