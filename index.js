require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGO, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useFindAndModify: false 
//})

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

const port = 3000;

app.get('/', (req, res) => {
  res.render('layouts/common')
})

app.listen(port, () => {
  console.log("Server is running on port ", port)
})
