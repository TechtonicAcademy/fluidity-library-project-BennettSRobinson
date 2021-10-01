import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';
import { addBook, updateBook, getBook } from '../scripts/API';
import isValidDate from '../scripts/dateValidate';
import Empty from '../assets/pics/empty.jpeg';
import cthulhu from '../assets/pics/CallOfCthulhu.jpg';

const Form = ({ id, form }) => {
  const [newBook, setNewBook] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (form === 'edit' && id !== 0) {
      getBook(id)
        // eslint-disable-next-line no-shadow
        .then(({ data: book }) => setNewBook(book))
        .catch((err) => console.log(err));
    }
  }, [id]);

  const titleRef = useRef();
  const authorRef = useRef();
  const summaryRef = useRef();
  const publishedRef = useRef();
  const pagesRef = useRef();

  const { title, author, summary, published, pages, rating } = newBook;
  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e) => {
    e.preventDefault();

    // new valeus for the book details if not its value is the old value
    const AEBook = {
      title: titleRef.current.value.trim() || title,
      author: authorRef.current.value.trim() || author,
      summary: summaryRef.current.value.trim() || summary,
      published: publishedRef.current.value || published,
      pages: pagesRef.current.value || pages,
      rating,
    };

    const {
      title: newTitle,
      author: newAuthor,
      published: newPublished,
    } = AEBook;

    if (!newTitle || !newAuthor) {
      // eslint-disable-next-line no-alert
      return alert(`Invalid submission: \n
      Title: ${newTitle ? '✅' : '❌'}\n
      Author: ${newAuthor ? '✅' : '❌'}\n
      Please enter the required inputs.`);
    }
    if (newPublished) {
      if (!isValidDate(newPublished)) {
        // eslint-disable-next-line no-alert
        return alert(`Invalid Date: \n
        Published: ${newPublished} \n
        The published date must be MM/DD/YYYY format including the /`);
      }
    }

    try {
      // eslint-disable-next-line no-unused-expressions
      form === 'edit' ? await updateBook(id, AEBook) : await addBook(AEBook);

      history.push('/bookshelf');
    } catch (err) {
      console.error(err);
    }
  };

  const handleRating = (star) => {
    setNewBook((prev) => ({ ...prev, rating: star }));
  };

  const handleButton = () => {
    if (form === 'edit') {
      history.push(`/details/${id}`);
    } else {
      history.push('/bookshelf');
    }
  };
  return (
    <main className="mainAdd">
      <h1 className="title">{form === 'edit' ? 'Edit Book' : 'Add Book'}</h1>
      <section className="addBook">
        <article className="addBook__wrapper">
          <form className="addBook__forms" onSubmit={handleSubmit}>
            <label htmlFor="title" className="addBook__forms__wrapper">
              <span className="addBook__forms__title">Title</span>
              <input
                id="title"
                type="text"
                className="addBook__forms__input"
                value={form === 'edit' ? title : null}
                ref={titleRef}
              />
            </label>

            <label htmlFor="author" className="addBook__forms__wrapper">
              <span className="addBook__forms__title">Author</span>
              <input
                id="author"
                type="text"
                className="addBook__forms__input"
                value={form === 'edit' ? author : null}
                ref={authorRef}
              />
            </label>
            <article className="addBook__wrapper addBook__wrapper--mobile">
              <div className="container">
                <img src={form === 'edit' ? cthulhu : Empty} alt="empty" />
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
                value={form === 'edit' ? summary : null}
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
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  value={form === 'edit' ? published : null}
                  ref={publishedRef}
                />
              </label>

              <label htmlFor="pages" className="addBook__forms__wrapper ">
                <span className="addBook__forms__title ">Pages</span>
                <input
                  id="pages"
                  type="number"
                  className="addBook__forms__input addBook__forms__input--calendar"
                  value={form === 'edit' ? pages : null}
                  ref={pagesRef}
                />
              </label>
            </div>
          </form>
          <div className="addBook__wrapper__stars">
            <h2>Rating</h2>
            <StarRatings
              rating={rating}
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
            <img src={form === 'edit' ? cthulhu : Empty} alt="empty" />
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
          onClick={handleSubmit}
        >
          {form === 'edit' ? 'Submit' : 'Add Book'}
        </button>
        <button
          type="button"
          className="buttons-Wrapper__btns"
          onClick={handleButton}
        >
          Cancel
        </button>
      </div>
    </main>
  );
};

Form.propTypes = {
  id: PropTypes.string,
  form: PropTypes.string,
};

Form.defaultProps = {
  id: '',
  form: '',
};
export default Form;
