import { Link } from 'react-router-dom';
import pict from '../assets/pics/CallOfCthulhu.jpg';

const BookForm = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { title, author, picture } = props.book;

  return (
    <article className="book ">
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
    </article>
  );
};

export default BookForm;
