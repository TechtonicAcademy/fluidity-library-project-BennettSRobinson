import { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getBook, updateBook } from '../scripts/API';
import isValidDate from '../scripts/dateValidate';
import '../styles/editBook.scss';
import cthulhu from '../assets/pics/CallOfCthulhu.jpg';

const EditBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const history = useHistory();

  // gets the current book
  useEffect(() => {
    getBook(id)
      .then(({ data: books }) => setBook(books))
      .catch((err) => console.log(err));
  }, [id]);

  const titleRef = useRef();
  const authorRef = useRef();
  const summaryRef = useRef();
  const publishedRef = useRef();
  const pagesRef = useRef();

  const { title, author, summary, published, pages } = book;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTitle = titleRef.current.value.trim() || title;
    const newAuthor = authorRef.current.value.trim() || author;
    const newSummary = summaryRef.current.value.trim() || summary;
    const newPublished = publishedRef.current.value || published;
    const newPages = pagesRef.current.value || pages;

    if (!newTitle || !newAuthor) {
      throw new Error('You have not inputed a Title and/or Author');
    }
    if (newPublished) {
      if (!isValidDate(newPublished)) {
        throw new Error('Incorrect date must be MM/DD/YYYY');
      }
    }
    updateBook(id, {
      title: newTitle,
      author: newAuthor,
      summary: newSummary,
      published: newPublished,
      pages: newPages,
    })
      // eslint-disable-next-line no-unused-vars
      .then((_) => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <h1 className="title">Edit Book</h1>
      <section className="addBook">
        <article className="addBook__wrapper">
          <form className="addBook__forms">
            <label htmlFor="title" className="addBook__forms__wrapper">
              <span className="addBook__forms__title">Title</span>
              <input
                id="title"
                type="text"
                className="addBook__forms__input"
                placeholder={title}
                ref={titleRef}
              />
            </label>

            <label htmlFor="author" className="addBook__forms__wrapper">
              <span className="addBook__forms__title">Author</span>
              <input
                id="author"
                type="text"
                className="addBook__forms__input"
                placeholder={author}
                ref={authorRef}
              />
            </label>
            <article className="addBook__wrapper addBook__wrapper--mobile">
              <div className="container container">
                <img src={cthulhu} alt="empty" />
              </div>
            </article>
            <div className="container__button container__button--mobile">
              <button type="button">Add Image</button>
            </div>
            <label htmlFor="summary" className="addBook__forms__wrapper">
              <span className="addBook__forms__title">Synopsis</span>
              <textarea
                id="summary"
                cols="50"
                rows="10"
                className="addBook__forms__input addBook__forms__input--synopsis"
                placeholder={summary}
                ref={summaryRef}
              />
            </label>
            <div className="addBook__forms__wrapper addBook__forms__wrapper--published">
              <label htmlFor="published" className="addBook__forms__wrapper">
                <span className="addBook__forms__title ">Published</span>
                <input
                  id="published"
                  type="text"
                  className="addBook__forms__input addBook__forms__input--calendar "
                  placeholder={published}
                  ref={publishedRef}
                />
              </label>

              <label htmlFor="pages" className="addBook__forms__wrapper">
                <span className="addBook__forms__title ">Pages</span>
                <input
                  id="pages"
                  type="number"
                  className="addBook__forms__input addBook__forms__input--calendar"
                  placeholder={pages}
                  ref={pagesRef}
                />
              </label>
            </div>
          </form>
          <div className="addBook__wrapper__stars">
            <h2>Rating</h2>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
        </article>
        <article className="addBook__wrapper addBook__wrapper--second">
          <div className="container">
            <img src={cthulhu} alt="empty" />
          </div>
          <div className="container__button">
            <button type="button">Change Image</button>
          </div>
        </article>
      </section>
      <div className="buttons-Wrapper">
        <button
          type="submit"
          className="buttons-Wrapper__btns buttons-Wrapper__btns--edit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="buttons-Wrapper__btns"
          onClick={() => history.push(`/details/${id}`)}
        >
          Cancel
        </button>
      </div>
    </main>
  );
};

export default EditBook;
