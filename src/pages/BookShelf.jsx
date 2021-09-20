import '../styles/bookShelf.scss';

const BookShelf = () => {
  return (
    <main>
      <div className="second_btn second_btn--hidden">
        <input
          type="text"
          className="second_btn__search"
          placeholder="Search by Title/Author"
        />
        <button type="submit" className="second_btn__submit">
          Search
        </button>
      </div>
      <article>
        <h1 className="title">
          Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn
        </h1>
      </article>
      <section className="main">
        <article className="book ">
          <div className="book__picture">{}</div>
          <p className="book__details">Call of Cthulhu</p>
          <p className="book__details"> H.P. Lovefcraft</p>
        </article>
        <article className="book">
          <div className="book__picture">{}</div>
          <p className="book__details">Call of Cthulhu</p>
          <p className="book__details"> H.P. Lovefcraft</p>
        </article>
        <article className="book ">
          <div className="book__picture">{}</div>
          <p className="book__details">Call of Cthulhu</p>
          <p className="book__details"> H.P. Lovefcraft</p>
        </article>
        <article className="book ">
          <div className="book__picture">{}</div>
          <p className="book__details">Call of Cthulhu</p>
          <p className="book__details"> H.P. Lovefcraft</p>
        </article>
        <article className="book ">
          <div className="book__picture">{}</div>
          <p className="book__details">Call of Cthulhu</p>
          <p className="book__details"> H.P. Lovefcraft</p>
        </article>
        <article className="book ">
          <div className="book__picture">{}</div>
          <p className="book__details">Call of Cthulhu</p>
          <p className="book__details"> H.P. Lovefcraft</p>
        </article>
        <article className="book">
          <div className="book__picture">{}</div>
          <p className="book__details">Call of Cthulhu</p>
          <p className="book__details"> H.P. Lovefcraft</p>
        </article>
        <article className="book">
          <div className="book__picture">{}</div>
          <p className="book__details">Call of Cthulhu</p>
          <p className="book__details"> H.P. Lovefcraft</p>
        </article>
        <article className="book">
          <div className="book__picture">{}</div>
          <p className="book__details">Call of Cthulhu</p>
          <p className="book__details"> H.P. Lovefcraft</p>
        </article>
      </section>
    </main>
  );
};

export default BookShelf;
