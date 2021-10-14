import axios from 'axios';

export const getBooks = (search) => {
  return axios.get(
    `http://localhost:8080/api/books/${
      search ? `/search/?query=${search}` : ''
    }`
  );
};

export const getBook = (id) => {
  return axios.get(`http://localhost:8080/api/books/${id}`);
};

export const addBook = (book) => {
  return axios.post('http://localhost:8080/api/books', book, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteBook = (id) => {
  return axios.delete(`http://localhost:8080/api/books/${id}`);
};

export const updateBook = (id, book) => {
  return axios.put(`http://localhost:8080/api/books/${id}`, book, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
