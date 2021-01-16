const express = require('express')
const app = express()
const port = 3001
const fetch = require('node-fetch')


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended:true}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


// app.get('/', (req, res) => res.send('Hello World!'))
//get a one
app.get('/one',async (req, res) => {
    const {id} = req.query;
    tId=parseInt(id);
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${tId}`,{method:'GET'});
    const todo = await response.json();
   res.send(todo); 
});
//get all
app.get('/', async(req, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`,{method:'GET'});
  const todos = await response.json();

  res.send(todos.slice(0,11));
});

//delete
app.delete('/', (req, res,next) => {
    const {id} = req.query;
    tId=parseInt(id)
    fetch(`https://jsonplaceholder.typicode.com/todos/${tId}`,{method:'DELETE'})
    .then(()=>next())
    .catch((err)=>send(err))
});
// //create
app.post('/', (req, res,next) => {
  const newT = req.body;

  fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  body: JSON.stringify(newT),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    res.send(json)
    next();
  });

});
// //update
app.put('/', (req, res,next) => {
  const newT = req.body;
  const {id}=req.query;
  const tId = parseInt(id)
  fetch(`https://jsonplaceholder.typicode.com/todos/${tId}`, {
  method: 'PUT',
  body: JSON.stringify(newT),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    res.send(json)
    next();
  }); 
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))