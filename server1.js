const express = require('express')
const app = express()
const port = 3001
const fs = require('fs')

let books =  JSON.parse(fs.readFileSync('books.json'));
console.log(books)
// app.get('/', (req, res) => res.send('Hello World!'))
//get a one
app.get('/one', (req, res) => {
    const {id} = req.query;
    bId=parseInt(id)
    book = books.find((b)=>b.id===bId);
   res.send(book); 
});
//get all
app.get('/', (req, res) => {
    res.send(books);
});

//delete
app.delete('/', (req, res) => {
    const {id} = req.query;
    bId=parseInt(id)
    console.log({books})
    const newbooks = books.find((b)=>b.id!==bId);
    fs.writeFileSync('books.json', newbooks);
});
//create
app.post('/', (req, res) => {
    let book={
        "id":3,
        "name":"dsf"
    }
    console.log("test")
    const aux = [...books,book]
   console.log( aux )    
    fs.writeFileSync('books.json', [...books,book]  );
    const {book}=req;
    //  book = {...book,id:books.length()}
    // books.push(book);
    console.log("created")

});
//update
app.put('/', (req, res) => {
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))