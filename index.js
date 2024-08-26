const express = require("express");
const app = express();
app.use(express.json());

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "1984", author: "George Orwell", year: 1949 },
];

app.post("/add-book", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.send("Book Added");
});

app.get("/read-book", (req, res) => {
  res.send(books);
});

app.put("/update-book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);

  if (book) {
    Object.assign(book, req.body);
    res.send("Book updated successfully");
  } else {
    res.send("Book not found");
  }
});

app.delete("/delete-book", function (req, res) {
  const deleteBook = books.pop();
  res.send({ message: "Book deleted", deleteBook, books });
});
app.listen(3000, () => {
  console.log("Server Started");
});


