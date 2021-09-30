import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import pict from '../assets/pics/CallOfCthulhu.jpg';

// eslint-disable-next-line react/prop-types
const BookForm = ({ id, title, author }) => {
  return (
    <NavLink className="book " to={`/details/${id}`}>
      <div
        className="book__picture"
        styles={{
          background: `url(${pict})`,
        }}
      >
        {}
      </div>
      <p className="book__details">{title}</p>
      <p className="book__details">{author}</p>
    </NavLink>
  );
};

BookForm.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookForm;
