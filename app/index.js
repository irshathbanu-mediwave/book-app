import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("tiny"));
app.use(cors());
import { getbybook, updatedbybook, deletebybook, getAllBook } from "./db.js";
app.get("/book", (req, res) => {
  res.json(getAllBook);
});
app.get("/book/:ide", (req, res, next) => {
  const book = req.params.id;
  if (!book) {
    return next({ code: 404, message: "Book not found for id" });
  }
  res.json(book);
});
app.post("/book", (req, res, next) => {
  if (!req.body.name || !req.body.year) {
    return next({
      code: 400,
      message: "Book payload should have name and year",
    });
  }

  const newBook = getbybook({
    name: req.body.name,
    year: req.body.year,
  });

  return res.json(newBook);
});
app.delete("/book/:id", (req, res, next) => {
  const b = deletebybook(req.params.id);
  if (!b) {
    return next({
      code: 400,
      message: "Failed to delete book with id " + req.params.id,
    });
  }
  res.json(b);
});
app.put("/book/:id", (req, res, next) => {
  if (!req.body.name || !req.body.year) {
    return next({
      code: 400,
      message: "Movie payload should have title and year",
    });
  }
  const b = updatedbybook({
    id: req.params.id,
    name: req.body.name,
    year: req.body.year,
  });

  if (!b) {
    return next({
      code: 400,
      message: "Failed to update movie with id " + req.params.id,
    });
  }

  return res.json(m);
});
app.use((req, res, next) => {
  next({
    code: 404,
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  if (err.code && err.code) {
    res.status(err.code);
  }
  if (err.message && err.message) {
    res.send({ message: err.message });
    return;
  }

  return res.status(500).send({
    message: "Unknown error",
  });
});

app.listen(1454, () => {
  console.log("Server running on port 1454");
});
