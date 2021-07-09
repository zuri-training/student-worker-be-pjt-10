/** This file is the starting point of the student-worker project
*/

// imports
const express = require('express');
const app = express()
require('dotenv').config();
const cors = require('cors');
// const Job = require('./src/models/job')

const connectDB = require('./src/db/mongoose');

// routes import 
const signupRoutes = require('./src/routes/signupRoutes');
const loginRoutes = require('./src/routes/loginRoutes');
const jobRoutes = require('./src/routes/jobRoutes')


app.use(cors());

// the middleware for this express app. It helps to 
// interprete JSON bodies
app.use(express.json({ extended: true }));


// creates a connection to the database
connectDB() 



// this is what makes separating the routes into different files possible 
app.use(signupRoutes);

// login routess
app.use(loginRoutes);

// job routes
app.use(jobRoutes)

// listen and serve the apis :
const { PORT } = process.env
app.listen(PORT, () => console.log(`Server started successfully on ${PORT}`))

