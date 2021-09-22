import { useState, useEffect } from 'react';
import BookForm from '../components/BookForm';
import { getBooks } from '../scripts/API';
import '../styles/bookShelf.scss';

const BookShelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      // eslint-disable-next-line no-shadow
      .then(({ data: books }) => setBooks(books))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <div className="second_btn second_btn--hidden">
        <input
          type="text"
          className="second_btn__search"
          placeholder="Search by Title/Author"
        />
        <button type="submit" className="second_btn__submit">
          Search
        </button>
      </div>
      <article>
        <h1 className="title">
          Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn
        </h1>
      </article>
      <section className="main">
        {books ? (
          <>
            {books.map((book) => (
              <BookForm key={book.id} book={book} />
            ))}
          </>
        ) : (
          <h2>There are no books in the shelf yet</h2>
        )}
      </section>
    </main>
  );
};

export default BookShelf;
