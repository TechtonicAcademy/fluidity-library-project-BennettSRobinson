import axios from 'axios';

const libraryUrl = 'http://localhost:8080/api/books/';

export const getBooks = (search) => {
  const searchUrl = `/search/?query=${search}`;
  return axios.get(libraryUrl + (search ? searchUrl : ''));
};

export const getBook = (id) => {
  return axios.get(libraryUrl + id);
};

export const addBook = (book) => {
  return axios.post(libraryUrl, book, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteBook = (id) => {
  return axios.delete(libraryUrl + id);
};

export const updateBook = (id, book) => {
  return axios.put(libraryUrl + id, book, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
