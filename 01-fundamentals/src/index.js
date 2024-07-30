import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'J. D. Vance',
    title: 'Hillbilly Elegy',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Alex Hirsch',
    title: 'The Book of Bill',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81O6JfipQhL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { id, img, title, author, getBook } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
