import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Book from '../components/Book';
import SearchBar from '../components/SearchBar';
import { getBooks } from '../scripts/API';
import '../styles/bookShelf.scss';

const BookShelf = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const search = location.state;

  useEffect(() => {
    getBooks(search)
      // eslint-disable-next-line no-shadow
      .then((data) => {
        setBooks(data.data);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <main>
      <article>
        <h1 className="title">
          Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn
        </h1>
      </article>
      <div className="second_btn second_btn--hidden">
        <SearchBar />
      </div>
      <section className="main">
        {books.length ? (
          <>
            {books.map(({ id, title, picture, Author: { name } }) => (
              <Book
                key={id}
                title={title}
                id={id}
                picture={picture}
                author={name}
              />
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
