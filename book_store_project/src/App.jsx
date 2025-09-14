import Book from './Book.jsx';
import './index.css'; // ensures styles are applied

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

export default function App() {
  return (
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
}