import e from "cors";

const books = [];
export const getbybook = ({ name, year }) => {
  const b = { id: new Date().getTime(), name, year };
  books.push(b);
  return b;
};
export const updatedbybook = ({ id, name, year }) => {
  const updatedid = books.findIndex((b) => b.id === id);
  if (updatedid != -1) {
    (books[updatedid][name] = name), 
    (books[updatedid][year] = year);
    return books[updatedid];
  }
  return null;
};
export const deletebybook = ({ id }) => {
  const deletebook = books.filter((b) => b.id !== id);
  return deletebook;
};
export const getAllBook = () => books;
