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
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='product'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type='submit' onClick={handleFormSubmission}>
          submit
        </button>
        <div>
          <button type='button' onClick={handleButtonClick}>
            click me
          </button>
        </div>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
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
