import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import ReactDOM from 'react-dom/client';
import Book from './Book';

const books = [
  {
    image: "https://itbook.store/img/books/9781484287507.png",
    title: "Programming for Absolute Beginners",
    authors: "Jonathan Bartlett",
    link: "https://itbook.store/books/9781484287507"
  },
  {
    image: "https://itbook.store/img/books/9781484292464.png",
    title: "Build Your Own Test Framework",
    authors: "Daniel Irvine",
    link: "https://itbook.store/books/9781484292464"
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="book_container">
    <div className="add_book">Add Book</div>
    {books.map((book, index) => (
      <Book
        key={index}
        image={book.image}
        title={book.title}
        authors={book.authors}
        link={book.link}
      />
    ))}
  </div>
);