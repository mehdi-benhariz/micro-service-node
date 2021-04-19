const express = require("express");
const app = express();
const port = 3001;
const fetch = require("node-fetch");
const { getData, saveData } = require("./utils");
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const db = "books";
app.post("/add", (req, res) => {
  //get the existing user data
  const books = getData(db);

  //get the new user data from post request
  const book = req.body;
  //check if the userData fields are missing
  if (!book.title || !book.number_page || !book.author || !book.theme)
    return res.status(401).send({ error: true, msg: "some data missing" });

  //check if the username exist already
  const findExist = books.find((b) => b.title === book.title);
  if (findExist)
    return res.status(409).send({ error: true, msg: "book already exist" });

  //append the  data
  books.push(book);
  //save the new user data
  saveData(books, db);
  res.send({ success: true, msg: "book's data added successfully" });
});

/* Read - GET method */
app.get("/list", (req, res) => {
  const books = getData(db);
  res.json(books);
});
/* Update - Patch method */
app.patch("/edit", (req, res) => {
  //get the username from url
  const username = req.params.username;
  //get the update data
  const userData = req.body;
  //get the existing user data
  const books = getData();
  //check if the username exist or not
  const findExist = books.find((user) => user.username === username);
  if (!findExist) {
    return res.status(409).send({ error: true, msg: "username not exist" });
  }
  //filter the userdata
  const updateUser = books.filter((user) => user.username !== username);
  //push the updated data
  updateUser.push(userData);
  //finally save it
  saveData(updateUser);
  res.send({ success: true, msg: "Book data updated successfully" });
});
/* Delete - Delete method */
app.delete("/remove", (req, res) => {
  const username = req.params.username;
  //get the existing userdata
  const books = getData();
  //filter the userdata to remove it
  const filterUser = books.filter((user) => user.username !== username);
  if (books.length === filterUser.length) {
    return res.status(409).send({ error: true, msg: "Book does not exist" });
  }
  //save the filtered data
  saveData(filterUser);
  res.send({ success: true, msg: "Book removed successfully" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
