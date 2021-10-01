import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BookForm from '../components/BookForm';
import SearchBar from '../components/SearchBar';
import { getBooks } from '../scripts/API';
import '../styles/bookShelf.scss';

const BookShelf = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setfilteredBooks] = useState([]);
  const location = useLocation();
  const search = location.state;

  useEffect(() => {
    getBooks()
      // eslint-disable-next-line no-shadow
      .then(({ data: books }) => {
        setBooks(books);
        setfilteredBooks(books);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (search)
      setfilteredBooks(
        books.filter((book) => {
          return (
            book.author.toLowerCase().includes(search.toLowerCase()) ||
            book.title.toLowerCase().includes(search.toLowerCase())
          );
        })
      );
    else setfilteredBooks(books);
  }, [search, books]);

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
        {filteredBooks.length ? (
          <>
            {filteredBooks.map(({ id, title, author }) => (
              <BookForm key={id} title={title} author={author} id={id} />
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
