/**
 * this file simply exposes a function [connectDB]
 * that creates a connection to mongodb.
 * If the connection is successful, it'll log a success message
 * to the console, otherwise, it'll stop the entire app from running.
 */

// I'm using the popular mongoose library to create the connection
const mongoose = require('mongoose')
require('dotenv').config()

// trys to connect to the DB if unsuccessful the app crashes.
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log('Mongodb connected successfully')
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

// exporting this function so it can be used elsewhere.
module.exports = connectDB