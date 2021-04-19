const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const bookRoute = require("./routes/bookRoute");

app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/books", bookRoute);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port} !`));
