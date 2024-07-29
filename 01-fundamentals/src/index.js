import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/81ytGlIkLoL._AC_UL600_SR600,400_.jpg'
    alt='Hillbilly Elegy'
  />
);
const Title = () => <h2>Hillbilly Elegy</h2>;
const Author = () => {
  return <h4>J. D. Vance</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
