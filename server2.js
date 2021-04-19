const express = require("express");
const app = express();
const port = 3002;

const products = require("./products.json");

//get a one
app.get("/one", async (req, res) => {
  const { id } = req.query;
  tId = parseInt(id);
  fetch(`https://jsonplaceholder.typicode.com/todos/${tId}`, { method: "GET" })
    .then((data) => data.json())
    .then((todo) => res.send(todo))
    .catch((err) => console.log(err));
});

//get all
app.get("/", async (req, res) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/`, { method: "GET" })
    .then((data) => data.json())
    .then((todos) => {
      res.send(todos.slice(0, 11));
    })
    .catch((err) => console.log(err));
});

//delete
app.delete("/", (req, res, next) => {
  const { id } = req.query;
  tId = parseInt(id);
  fetch(`https://jsonplaceholder.typicode.com/todos/${tId}`, {
    method: "DELETE",
  })
    .then(() => next())
    .catch((err) => send(err));
});

// //create
app.post("/", (req, res, next) => {
  const newT = req.body;

  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(newT),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      res.send(json);
      next();
    });
});
// //update
app.put("/", (req, res, next) => {
  const newT = req.body;
  const { id } = req.query;
  const tId = parseInt(id);
  fetch(`https://jsonplaceholder.typicode.com/todos/${tId}`, {
    method: "PUT",
    body: JSON.stringify(newT),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      res.send(json);
      next();
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
