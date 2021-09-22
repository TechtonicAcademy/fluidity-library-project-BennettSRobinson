import { useRef } from 'react';
import { useHistory } from 'react-router';
import { addBook } from '../scripts/API';
import '../styles/add.scss';
import Empty from '../assets/pics/empty.jpeg';

const AddBook = () => {
  // History to push to stack
  const history = useHistory();

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

    // If there is not a input for author and/or title throw error
    if (!title || !author) {
      throw new Error('You have not inputed a Title and/or Author');
    }

    // add book to the database and then it moves you to bookshelf
    addBook({ title, author, summary, published, pages })
      .then((_) => history.push('/bookshelf'))
      .catch((err) => console.log(err));
  };
  return (
    <main className="mainAdd">
      <h1 className="title">Add Book</h1>
      <section className="addBook">
        <article className="addBook__wrapper">
          <form className="addBook__forms" onSubmit={handleFormSubmit}>
            <div className="addBook__forms__wrapper">
              <label htmlFor="title" className="addBook__forms__title">
                Title
              </label>
              <input
                type="text"
                className="addBook__forms__input"
                ref={titleRef}
              />
            </div>
            <div className="addBook__forms__wrapper">
              <label className="addBook__forms__title">Author</label>
              <input
                type="text"
                className="addBook__forms__input"
                ref={authorRef}
              />
            </div>
            <article className="addBook__wrapper addBook__wrapper--mobile">
              <div className="container">
                <img src={Empty} alt="empty" />
              </div>
            </article>
            <div className="container__button container__button--mobile">
              <button>Add Image</button>
            </div>
            <div className="addBook__forms__wrapper">
              <label className="addBook__forms__title">Synopsis</label>
              <textarea
                cols="50"
                rows="10"
                className="addBook__forms__input addBook__forms__input--synopsis"
                ref={summaryRef}
              />
            </div>
            <div className="addBook__forms__wrapper addBook__forms__wrapper--published">
              <label className="addBook__forms__title ">Published</label>
              <input
                type="text"
                className="addBook__forms__input addBook__forms__input--calendar"
                placeholder="MM/DD/YYYY"
                ref={publishedRef}
              />
              <label className="addBook__forms__title ">Pages</label>
              <input
                type="number"
                className="addBook__forms__input addBook__forms__input--calendar"
                ref={pagesRef}
              />
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
            <img src={Empty} alt="empty" />
          </div>
          <div className="container__button">
            <button>Add Image</button>
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
          onClick={() => history.push('/')}
        >
          Cancel
        </button>
      </div>
    </main>
  );
};

export default AddBook;
