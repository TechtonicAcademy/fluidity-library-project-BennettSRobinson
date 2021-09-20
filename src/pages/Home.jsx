import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="homepage">
        <p className="homepage__title">
          Books.
          <span className="homepage__info">Read the books if you dare.</span>
        </p>
      </section>
      <section className="mainHome">
        <p className="mainHome__title"> Welcome to the Library</p>
        <p className="mainHome__description">
          This is the greatest book in the world you should definietly come pick
          it up.
        </p>
        <NavLink to="/bookshelf" className="btn">
          See Books
        </NavLink>
        <p className="mainHome__description">
          This is a very long text that you should look at if you want to know
          what is going on. This project wants me to write some text about some
          books
        </p>
        <NavLink to="/add" className="btn">
          Add a Book
        </NavLink>
      </section>
    </>
  );
};

export default Home;
