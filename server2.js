const express = require('express')
const app = express()
const port = 3002

const products = require('./products.json')

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => {
    res.send(products);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))