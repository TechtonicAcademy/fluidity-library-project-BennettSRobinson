// test Error Boundary
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getBook, deleteBook } from '../scripts/API';
import '../styles/Bookdetails.scss';
import cthulhu from '../assets/pics/CallOfCthulhu.jpg';

const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const history = useHistory();

  // gets the current book
  useEffect(() => {
    getBook(id)
      .then(({ data: books }) => setBook(books))
      .catch((err) => console.log(err));
  }, [id]);

  // handles the delete button
  // eslint-disable-next-line no-shadow
  const handleDelete = (id) => {
    deleteBook(id)
      // eslint-disable-next-line no-unused-vars
      .then((_) => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  // deconstructs the book object
  const { title, author, summary, published, pages } = book;

  return (
    <main>
      <article className="bookPg">
        <section className="bookPg__wrapper">
          <h1 className="bookPg__details bookPg__details--title bookPg__details--mobile">
            {title}
          </h1>
          <div
            className="bookPg__picture"
            styles={{
              background: `url(${cthulhu})`,
            }}
          >
            {}
          </div>
          <div className="bookPg__wrapper__stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
        </section>
        <section className="bookPg__wrapper bookPg__wrapper--second">
          <h1 className="bookPg__details bookPg__details--title bookPg__details--desktop">
            {title}
          </h1>
          <p className="bookPg__details bookPg__details--author">{author}</p>
          <p className="bookPg__details bookPg__details--published">
            <i>Published: {published}</i>
          </p>
          <p className="bookPg__details bookPg__details--numPgs">{pages}</p>
          {/* {Summary taken from lovecraft.fandom.com for Call of Cthulhu} */}
          <p className="bookPg__summary">{summary}</p>
        </section>
      </article>
      <div className="buttons-Wrapper">
        <button
          type="button"
          className="buttons-Wrapper__btns buttons-Wrapper__btns--edit"
          onClick={() => history.push('/edit')}
        >
          Edit This Book
        </button>
        <button
          type="button"
          className="buttons-Wrapper__btns buttons-Wrapper__btns--delete"
          onClick={() => handleDelete(id)}
        >
          Delete this Book
        </button>
        {/* Added a third button so you can cancel the details page and go
        back to the bookshelf without deleting or editing a book */}
        <button
          type="button"
          className="buttons-Wrapper__btns "
          onClick={() => history.push('/bookshelf')}
        >
          Cancel
        </button>
      </div>
    </main>
  );
};

export default BookDetails;
