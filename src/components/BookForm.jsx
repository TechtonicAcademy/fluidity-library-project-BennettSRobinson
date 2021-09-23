import { NavLink } from 'react-router-dom';
import pict from '../assets/pics/CallOfCthulhu.jpg';

// eslint-disable-next-line react/prop-types
const BookForm = ({ book: { id, title, author } }) => {
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

export default BookForm;
