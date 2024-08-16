import React from "react";
import "./style.css"


function BookCard(props) {
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div className="desc">
        <h2>
          <a href="/show-book/123id">{props.book.bookTitle}</a>
        </h2>
        <h3>{props.book.bookAuthor}</h3>
        <p>{props.book.description}     <input type="button"  value="X"     onClick={()=> props.deleteBook()}
/></p>
      </div>
    </div>
  );
}

export default BookCard;