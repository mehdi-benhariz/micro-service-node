const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const bookRoute = require('../routes/bookRoute');

app.use(morgan('combined'));

app.use('/book', bookRoute);
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


// fetch('http://localhost:3002/',{method:"POST"})
// .then(res=>res.json())
// .then(products=>console.log(products ))
// .catch(err=>console.log(err))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port} !`))


