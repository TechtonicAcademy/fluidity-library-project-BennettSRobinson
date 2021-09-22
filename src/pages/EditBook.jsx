import '../styles/editBook.scss';
import cthulhu from '../assets/pics/CallOfCthulhu.jpg';

const EditBook = () => {
  return (
    <main>
      <h1 className="title">Edit Book</h1>
      <section className="addBook">
        <article className="addBook__wrapper">
          <form className="addBook__forms">
            <div className="addBook__forms__wrapper">
              <label className="addBook__forms__title">Title</label>
              <input
                type="text"
                className="addBook__forms__input"
                placeholder="Call of Cthulhu"
              />
            </div>
            <div className="addBook__forms__wrapper">
              <label className="addBook__forms__title">Author</label>
              <input
                type="text"
                className="addBook__forms__input"
                placeholder="H.P. Lovacraft"
              />
            </div>
            <article className="addBook__wrapper addBook__wrapper--mobile">
              <div className="container container">
                <img src={cthulhu} alt="empty" />
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
                placeholder="'The Call of Cthulhu' is a short story by American horror writer H. P. Lovecraft, written in August and September 1926 and originally serialized in the February 1928 issue of Weird Tales. It is the only story written by Lovecraft in which the extraterrestrial entity Cthulhu himself makes a major appearance. The story is written in a documentary style, with three independent narratives linked together by the device of a narrator discovering notes left by a deceased relative."
              />
            </div>
            <div className="addBook__forms__wrapper addBook__forms__wrapper--published">
              <label className="addBook__forms__title ">Published</label>
              <input
                type="text"
                className="addBook__forms__input addBook__forms__input--calendar "
                placeholder=" 02/6/1928"
              />
              <label className="addBook__forms__title ">Pages</label>
              <input
                type="number"
                className="addBook__forms__input addBook__forms__input--calendar"
                placeholder="78"
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
            <img src={cthulhu} alt="empty" />
          </div>
          <div className="container__button">
            <button>Change Image</button>
          </div>
        </article>
      </section>
      <div className="buttons-Wrapper">
        <button className="buttons-Wrapper__btns buttons-Wrapper__btns--edit">
          Submit
        </button>
        <button className="buttons-Wrapper__btns">Cancel</button>
        <button className="buttons-Wrapper__btns buttons-Wrapper__btns--delete">
          Delete Book
        </button>
      </div>
    </main>
  );
};

export default EditBook;
