import { BookList } from './components/BookList';

import './App.css';

function App() {
  const books = [
    {"title": "Anna Karenina", "author": "Tolstoy, Leo", "year": 1814, "edition": "Penguin"},
    {"title": "Lord of the rings", "author": "Tolkien, J.R.", "year": 1937, "edition": "Penguin"},
    {"title": "Hamlet", "author": "Tolkien, J.R.", "year": 1937, "edition": "Penguin"}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <BookList books={books}/>
      </header>
    </div>
  );
}

export default App;
