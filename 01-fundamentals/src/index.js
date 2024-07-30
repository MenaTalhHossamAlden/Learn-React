import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'J. D. Vance',
    title: 'Hillbilly Elegy',
    img: './images/book-1.jpg',
  },
  {
    author: 'Alex Hirsch',
    title: 'The Book of Bill',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81O6JfipQhL._AC_UL600_SR600,400_.jpg',
  },
];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book author={book.author} title={book.title} img={book.img} />
      ))}
    </section>
  );
};   
const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
