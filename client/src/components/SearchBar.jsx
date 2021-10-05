import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ nav }) => {
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
        className={nav === 'header' ? 'navBar__search' : 'second_btn__search'}
        value={search}
        placeholder="Search by Title/Author"
        onChange={(e) => setsearch(e.target.value)}
      />
      <button
        type="button"
        className={nav === 'header' ? 'navBar__btn' : 'second_btn__submit'}
        onClick={handleSearch}
      >
        Search
      </button>
    </>
  );
};

SearchBar.propTypes = {
  nav: PropTypes.string,
};

SearchBar.defaultProps = {
  nav: '',
};
export default SearchBar;
