import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { addBook } from '../scripts/API';
import isValidDate from '../scripts/dateValidate';
import '../styles/add.scss';
import Empty from '../assets/pics/empty.jpeg';

const AddBook = () => {
  // History to push to stack
  const history = useHistory();
  const [book, setBook] = useState({ rating: 0 });
  // Refs for inputs
  const titleRef = useRef();
  const authorRef = useRef();
  const summaryRef = useRef();
  const publishedRef = useRef();
  const pagesRef = useRef();

  // eslint-disable-next-line consistent-return
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Grabbing the refs to load into object keys
    const title = titleRef.current.value.trim();
    const author = authorRef.current.value.trim();
    const summary = summaryRef.current.value.trim();
    const published = publishedRef.current.value;
    const pages = pagesRef.current.value;
    const { rating } = book;

    // If there is not a input for author and/or title throw error
    if (!title || !author) {
      // eslint-disable-next-line no-alert
      return alert(`Invalid submission: \n
      Title: ${title ? '✅' : '❌'}\n
      Author: ${author ? '✅' : '❌'}\n
      Please enter the required inputs.`);
    }
    if (published) {
      if (!isValidDate(published)) {
        // eslint-disable-next-line no-alert
        return alert(`Invalid Date: \n
      Published: ${published} \n
      The published date must be MM/DD/YYYY format including the /`);
      }
    }
    // add book to the database and then it moves you to bookshelf
    addBook({ title, author, summary, published, pages, rating })
      // eslint-disable-next-line no-unused-vars
      .then((_) => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };

  const handleRating = (star) => {
    setBook((prev) => ({ ...prev, rating: star }));
  };

  return (
    <main className="mainAdd">
      <h1 className="title">Add Book</h1>
      <section className="addBook">
        <article className="addBook__wrapper">
          <form className="addBook__forms" onSubmit={handleFormSubmit}>
            <label htmlFor="title" className="addBook__forms__wrapper">
              <span className="addBook__forms__title">Title</span>
              <input
                id="title"
                type="text"
                className="addBook__forms__input"
                ref={titleRef}
              />
            </label>

            <label htmlFor="author" className="addBook__forms__wrapper">
              <span className="addBook__forms__title">Author</span>
              <input
                id="author"
                type="text"
                className="addBook__forms__input"
                ref={authorRef}
              />
            </label>
            <article className="addBook__wrapper addBook__wrapper--mobile">
              <div className="container">
                <img src={Empty} alt="empty" />
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
                ref={summaryRef}
              />
            </label>

            <div className="addBook__forms__wrapper addBook__forms__wrapper--published">
              <label htmlFor="published" className="addBook__forms__wrapper">
                <span className="addBook__forms__title ">Published</span>
                <input
                  id="published"
                  type="text"
                  className="addBook__forms__input addBook__forms__input--calendar"
                  placeholder="MM/DD/YYYY"
                  ref={publishedRef}
                />
              </label>

              <label htmlFor="pages" className="addBook__forms__wrapper ">
                <span className="addBook__forms__title ">Pages</span>
                <input
                  id="pages"
                  type="number"
                  className="addBook__forms__input addBook__forms__input--calendar"
                  ref={pagesRef}
                />
              </label>
            </div>
          </form>
          <div className="addBook__wrapper__stars">
            <h2>Rating</h2>
            <StarRatings
              rating={book.rating}
              starRatedColor="orange"
              numberOfStars={5}
              starDimension="25px"
              starSpacing="5px"
              changeRating={handleRating}
            />
          </div>
        </article>
        <article className="addBook__wrapper addBook__wrapper--second">
          <div className="container">
            <img src={Empty} alt="empty" />
          </div>
          <div className="container__button">
            <button type="button">Add Image</button>
          </div>
        </article>
      </section>
      <div className="buttons-Wrapper">
        <button
          className="buttons-Wrapper__btns buttons-Wrapper__btns--edit"
          type="submit"
          onClick={handleFormSubmit}
        >
          Add Book
        </button>
        <button
          type="button"
          className="buttons-Wrapper__btns"
          onClick={() => history.push('/bookshelf')}
        >
          Cancel
        </button>
      </div>
    </main>
  );
};

export default AddBook;
