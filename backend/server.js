const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); //to access the environment variables
const app = express();

//the middleware
app.use(express.json()); //parse JSON
app.use(cors());// allow cross-origin requests

//connect to the database

app.get('/', (req, res) => {
    res.send('Welcome to the book recommendations app');
}) 
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})