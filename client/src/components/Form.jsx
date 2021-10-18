import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';
import { addBook, updateBook, getBook } from '../scripts/API';
import isValidDate from '../scripts/dateValidate';
import Empty from '../assets/pics/empty.jpeg';

const Form = ({ id, form }) => {
  const [book, setBook] = useState({ rating: 0 });
  const [image, setImage] = useState(Empty);
  const [author, setAuthor] = useState();
  const [file, setFile] = useState();
  const history = useHistory();

  const formData = new FormData();

  useEffect(() => {
    if (form === 'edit' && id !== 0) {
      getBook(id)
        // eslint-disable-next-line no-shadow
        .then(({ data }) => {
          setBook(data);
          setAuthor(data.Author.name);
          setImage(data.picture);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const titleRef = useRef();
  const authorRef = useRef();
  const summaryRef = useRef();
  const publishedRef = useRef();
  const pagesRef = useRef();
  const pictureRef = useRef();

  const { title, summary, published, pages, rating } = book;

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (event) => {
    event.preventDefault();

    // // new valeus for the book details if not its value is the old value
    const AEBook = {
      title: titleRef.current.value.trim() || title,
      name: authorRef.current.value.trim() || author,
      summary: summaryRef.current.value.trim() || summary,
      published: publishedRef.current.value || published,
      pages: pagesRef.current.value || pages,
      rating,
    };

    const {
      title: newTitle,
      name: newAuthor,
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

    Object.keys(AEBook).forEach((key) => {
      formData.append(key, AEBook[key]);
    });
    formData.append('picture', file);
    try {
      // eslint-disable-next-line no-unused-expressions
      form === 'edit'
        ? await updateBook(id, formData)
        : await addBook(formData);

      history.push('/bookshelf');
    } catch (err) {
      console.error(err);
    }
  };

  const handleRating = (star) => {
    setBook((prev) => ({ ...prev, rating: star }));
  };

  const handleButton = () => {
    if (form === 'edit') {
      history.push(`/details/${id}`);
    } else {
      history.push('/bookshelf');
    }
  };
  const handleImage = (event) => {
    const { files } = event.target;
    setImage(URL.createObjectURL(files[0]));
    setFile(files[0]);
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
                defaultValue={form === 'edit' ? title : ''}
                name="title"
                ref={titleRef}
              />
            </label>

            <label htmlFor="author" className="addBook__forms__wrapper">
              <span className="addBook__forms__title">Author</span>
              <input
                id="author"
                type="text"
                className="addBook__forms__input"
                defaultValue={
                  // eslint-disable-next-line no-nested-ternary
                  form === 'edit' ? author : ''
                }
                name="author"
                ref={authorRef}
              />
            </label>
            <article className="addBook__wrapper addBook__wrapper--mobile">
              <div className="container">
                <img
                  className="container__img"
                  src={image}
                  alt="empty"
                  crossOrigin="true"
                />
              </div>
            </article>
            <div className="container__button container__button--mobile">
              <button
                type="button"
                onClick={() => document.getElementById('getFile').click()}
              >
                Add Image
              </button>
              <input
                id="getFile"
                type="file"
                style={{ visibility: 'hidden' }}
                onChange={handleImage}
              />
            </div>

            <label htmlFor="summary" className="addBook__forms__wrapper">
              <span className="addBook__forms__title">Synopsis</span>
              <textarea
                id="summary"
                cols="50"
                rows="10"
                className="addBook__forms__input addBook__forms__input--synopsis"
                defaultValue={form === 'edit' ? summary : ''}
                name="summary"
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
                  defaultValue={form === 'edit' ? published : ''}
                  name="published"
                  ref={publishedRef}
                />
              </label>

              <label htmlFor="pages" className="addBook__forms__wrapper ">
                <span className="addBook__forms__title ">Pages</span>
                <input
                  id="pages"
                  type="number"
                  className="addBook__forms__input addBook__forms__input--calendar"
                  defaultValue={form === 'edit' ? pages : 0}
                  name="pages"
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
            <img
              className="container__img"
              src={image}
              alt="empty"
              crossOrigin="true"
            />
          </div>
          <div className="container__button">
            <button
              type="button"
              onClick={() => document.getElementById('getFile').click()}
            >
              Add Image
            </button>
            <input
              id="getFile"
              type="file"
              style={{ visibility: 'hidden' }}
              onChange={handleImage}
              ref={pictureRef}
            />
          </div>
        </article>
      </section>
      <div className="buttons-Wrapper">
        <button
          className="buttons-Wrapper__btns buttons-Wrapper__btns--edit"
          type="submit"
          onClick={(e) => handleSubmit(e)}
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
