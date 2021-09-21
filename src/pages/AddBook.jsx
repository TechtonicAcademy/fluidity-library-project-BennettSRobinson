import '../styles/add.scss';
import Empty from '../assets/pics/empty.jpeg';

const AddBook = () => (
  <main className="mainAdd">
    <h1 className="title">Add Book</h1>
    <section className="addBook">
      <article className="addBook__wrapper">
        <form className="addBook__forms">
          <div className="addBook__forms__wrapper">
            <label control="title" className="addBook__forms__title">
              Title
            </label>
            <input type="text" className="addBook__forms__input" />
          </div>
          <div className="addBook__forms__wrapper">
            <label className="addBook__forms__title">Author</label>
            <input type="text" className="addBook__forms__input" />
          </div>
          <article className="addBook__wrapper addBook__wrapper--mobile">
            <div className="container container">{Empty}</div>
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
            />
          </div>
          <div className="addBook__forms__wrapper addBook__forms__wrapper--published">
            <label className="addBook__forms__title ">Published</label>
            <input
              type="text"
              className="addBook__forms__input addBook__forms__input--calendar"
              placeholder="MM/DD/YYYY"
            />
            <label className="addBook__forms__title ">Pages</label>
            <input
              type="number"
              className="addBook__forms__input addBook__forms__input--calendar"
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
          <img src="../assets/pics/empty.jpeg" alt="empty" />
        </div>
        <div className="container__button">
          <button>Add Image</button>
        </div>
      </article>
    </section>
    <div className="buttons-Wrapper">
      <button className="buttons-Wrapper__btns buttons-Wrapper__btns--edit">
        Add Book
      </button>
      <button className="buttons-Wrapper__btns">Cancel</button>
    </div>
  </main>
);

export default AddBook;
