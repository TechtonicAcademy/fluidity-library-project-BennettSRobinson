import { useParams } from 'react-router-dom';
import '../styles/editBook.scss';
import Form from '../components/Form';

const EditBook = () => {
  const { id } = useParams();

  return <Form form="edit" id={id} />;
};

export default EditBook;
