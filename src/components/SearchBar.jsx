import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SearchBar = (props) => {
  const history = useHistory();
  const [search, setsearch] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    history.push({
      pathname: '/bookshelf',
      search: `?search=${search}`,
      state: search,
    });
    setsearch('');
  };
  return (
    <>
      <input
        type="text"
        className={
          props.nav === 'header' ? 'navBar__search' : 'second_btn__search'
        }
        placeholder="Search by Title/Author"
        onChange={(e) => setsearch(e.target.value)}
      />
      <button
        type="button"
        className={
          props.nav === 'header' ? 'navBar__btn' : 'second_btn__submit'
        }
        onClick={handleSearch}
      >
        Search
      </button>
    </>
  );
};

export default SearchBar;
