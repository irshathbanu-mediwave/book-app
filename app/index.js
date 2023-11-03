const books = [];
export const getbybook = ({ name, year }) => {
  const b = { id: new Date().getTime(), name, year };
  books.push(b);
  return b;
};
