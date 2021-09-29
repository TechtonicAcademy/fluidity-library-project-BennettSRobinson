import { NavLink, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav className="navBar">
        <h2 className="navBar__title">The Library</h2>

        <ul className="navBar__list">
          <li className="navBar__list__item ">
            <NavLink
              className="navBar__tab navBar__tab--selector"
              to="/"
              isActive={() =>
                location.pathname === '/' ||
                location.pathname === '/Home' ||
                location.pathname === '/home'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navBar__list__item">
            <NavLink className="navBar__tab" to="/bookshelf">
              Bookshelf
            </NavLink>
          </li>
          <li className="navBar__list__item">
            <NavLink className="navBar__tab" to="/add">
              Add Book
            </NavLink>
          </li>
        </ul>
        <button type="button" className="navBar__burger">
          {}
        </button>
        <SearchBar nav="header" />
      </nav>
    </header>
  );
};

export default Header;
