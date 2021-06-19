/**
 * this file contains the model for a student
 * using the app
 */

const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            minLength: 5,
            trim: true
        },

        firstname: {
            type: String,
            required: true,
            minLength: 3,
            trim: true
        },

        lastname: {
            type: String,
            required: true,
            minLength: 3,
            trim: true
        },

        school: {
            type: String,
            required: true,
            trim: true
        },

        password: {
            type: String,

        }
    },
    { collection: 'students' })

// this will keep the email field always unique
StudentSchema.index({ email: 1 }, { unique: true })

// converting the schema to a mongoose model
const Student = mongoose.model('Student', StudentSchema)

// exporting it so it can be used elsewhere
module.exports = Student