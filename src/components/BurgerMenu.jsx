import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const BurgerMenu = () => {
  const [active, setactive] = useState(false);
  const { pathname } = useLocation();

  const handleBurger = () => {
    setactive(!active);
  };

  return (
    <>
      <button type="button" className="navBar__burger " onClick={handleBurger}>
        {}
      </button>
      <div>
        <ul className={`menu ${active ? 'showMenu' : null}`}>
          <li>
            <NavLink
              className="menu__link"
              to="/"
              isActive={() =>
                pathname === '/' || pathname.toLowerCase() === '/home'
              }
              onClick={handleBurger}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="menu__link"
              to="/bookshelf"
              onClick={handleBurger}
            >
              BookShelf
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__link" to="/add" onClick={handleBurger}>
              Add Book
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
