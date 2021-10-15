import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Book = ({ id, title, author, picture }) => {
  return (
    <Link className="book " to={`/details/${id}`}>
      <div className="book__picture__container">
        <img
          className="book__picture"
          src={picture}
          crossOrigin="true"
          alt={title}
        />
      </div>
      <p className="book__details">{title}</p>
      <p className="book__details">{author}</p>
    </Link>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
export default Book;
