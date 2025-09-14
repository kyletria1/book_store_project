function Book(props) {
  return (
    <div className="book">
      <img className="book_image" src={props.image} alt={props.title} />
      <h2 className="book_title">{props.title}</h2>
      <h3 className="book_author">{props.authors}</h3>
      <a className="book_link" href={props.link} target="_blank" rel="noopener noreferrer">View Book</a>
    </div>
  );
}

export default Book;