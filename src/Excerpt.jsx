function Excerpt(props) {
  return (
    <div className="excerpt">
      <h1>{props.title}</h1>
      <h3>{props.body}</h3>
      <button>Click Me!</button>
    </div>
  );
}

export default Excerpt

function Book(props) {
  return (
    <div className="excerpt">
      <image>{props.image}</image>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      <h4>{props.authors}<h4>
      <p>{props.price}</p>
      <button>Add To Cart</button>
    </div>
  );
}

export default Book

function Banner(props) {
  return (
    <div className="banner">
      <h1>{props.text}</h1>
    </div>
  );
}

export default Banner

{
  "error": "0",
  "title": "Programming for Absolute Beginners",
  "subtitle": "Using the JavaScript Programming Language",
  "authors": "Jonathan Bartlett",
  "publisher": "Apress",
  "language": "English",
  "isbn10": "1484287509",
  "isbn13": "9781484287507",
  "pages": "333",
  "year": "2023",
  "rating": "0",
  "desc": "New programmers start here...this book introduces students or aspiring professionals to the world of computer programming using JavaScript and related technologies. This book doesn&#039;t just teach the basics of programming, but also all of the tools that new programmers need to get started, includ...",
  "price": "$21.72",
  "image": "https://itbook.store/img/books/9781484287507.png",
  "url": "https://itbook.store/books/9781484287507"
}

{
  "error": "0",
  "title": "Build Your Own Test Framework",
  "subtitle": "A Practical Guide to Writing Better Automated Tests",
  "authors": "Daniel Irvine",
  "publisher": "Apress",
  "language": "English",
  "isbn10": "1484292464",
  "isbn13": "9781484292464",
  "pages": "269",
  "year": "2023",
  "rating": "0",
  "desc": "Learn to write better automated tests that will dramatically increase your productivity and have fun while doing so. This book is a build-your-own adventure designed for individual reading and for collaborative workshops. You will build an xUnit automated test framework using JavaScript: initially a...",
  "price": "$26.87",
  "image": "https://itbook.store/img/books/9781484292464.png",
  "url": "https://itbook.store/books/9781484292464"
}