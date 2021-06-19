/** This file is the starting point of the student-worker project
*/

// imports
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./db/mongoose');

// routes import 
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');


const app = express()
app.use(cors());

// the middleware for this express app. It helps to 
// interprete JSON bodies
app.use(express.json({ extended: true }));


connectDB() // creates a connection to the database



// this is what makes separating the routes
// into different files possible 
app.use(signupRoutes);

// login routess
app.use(loginRoutes);

// listen and serve the apis :
const { PORT } = process.env
app.listen(PORT, () => console.log(`Server started successfully on ${PORT}`))