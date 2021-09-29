import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const BurgerMenu = () => {
  const [active, setactive] = useState(false);
  const location = useLocation();

  const handleBurger = () => {
    setactive(!active);
  };
  console.log(active);
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
                location.pathname === '/' ||
                location.pathname === '/Home' ||
                location.pathname === '/home'
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
