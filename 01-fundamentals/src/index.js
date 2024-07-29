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
const Image = () => <img src='./images/book-1.jpg' alt='Hillbilly Elegy' />;
const Title = () => <h2>Hillbilly Elegy</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyles}>J. D. Vance</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
