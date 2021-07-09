/**
 * this file contains the model for a student
 * using the app
 */

const mongoose = require('mongoose')
const ResumeSchema = require('./resume_schema')

const StudentSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            minLength: 5,
            trim: true
        },

        password: {
            type: String,
            required: true,
            minLength: 6
        },

        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        countryCode: {
            type: String,
            required: true,
            default: '+234'
        },
        mobileNumber: {
            type: String,
            required: true,
            default: '09029880470'
        },
        currentState: {
            type: String,
            required: true,
            default: 'Lagos'
        },
        currentCity: {
            type: String,
            required: true,
            default: 'Okokomaiko'
        },
        school: {
            type: String,
        },
        course: {
            type: String,
        },
        startYear: {
            type: String,
        },
        endYear: {
            type: String,
        },
        skill1: {
            type: String,
        },
        skill2: {
            type: String,
        },
        skill3: {
            type: String,
        },
    },
    { collection: 'students' })

// this will keep the email field always unique
StudentSchema.index({ email: 1 }, { unique: true })

// converting the schema to a mongoose model
const Student = mongoose.model('Student', StudentSchema)



// exporting it so it can be used elsewhere
module.exports = Student