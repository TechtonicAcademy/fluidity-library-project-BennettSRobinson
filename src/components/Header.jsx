import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <Link to="/">
          <h2>The Library</h2>
        </Link>

        <ul>
          <li>
            <NavLink to="/" isActive={() => location.pathname === '/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookshelf">Bookshelf</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add Book</NavLink>
          </li>
          <li>
            <NavLink to="/edit">Edit Book</NavLink>
          </li>
          <li>
            <NavLink to="/bookdetails">Book Details</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
