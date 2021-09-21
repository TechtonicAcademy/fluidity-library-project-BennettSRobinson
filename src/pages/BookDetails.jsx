// test Error Boundary
import '../styles/Bookdetails.scss';

const BookDetails = () => {
  return (
    <main>
      <article className="bookPg">
        <section className="bookPg__wrapper">
          <h1 className="bookPg__details bookPg__details--title bookPg__details--mobile">
            Call of Cthulhu
          </h1>
          <div className="bookPg__picture">{}</div>
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
            Call of Cthulhu
          </h1>
          <p className="bookPg__details bookPg__details--author">
            H.P. Lovacraft
          </p>
          <p className="bookPg__details bookPg__details--published">
            <i>Published: February 1928</i>
          </p>
          <p className="bookPg__details bookPg__details--numPgs">78 pages</p>
          {/* {Summary taken from lovecraft.fandom.com for Call of Cthulhu} */}
          <p className="bookPg__summary">
            "The Call of Cthulhu" is a short story by American horror writer H.
            P. Lovecraft, written in August and September 1926 and originally
            serialized in the February 1928 issue of Weird Tales. It is the only
            story written by Lovecraft in which the extraterrestrial entity
            Cthulhu himself makes a major appearance. The story is written in a
            documentary style, with three independent narratives linked together
            by the device of a narrator discovering notes left by a deceased
            relative.
          </p>
        </section>
      </article>
      <div className="buttons-Wrapper">
        <button className="buttons-Wrapper__btns buttons-Wrapper__btns--edit">
          Edit This Book
        </button>
        <button className="buttons-Wrapper__btns">Back to Shelf</button>
      </div>
    </main>
  );
};

export default BookDetails;
