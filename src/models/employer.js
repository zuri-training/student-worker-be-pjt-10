/**
 * this file contains the model for an employer
 * using the app
 */

const mongoose = require('mongoose')

const EmployerSchema = new mongoose.Schema(
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

        company: {
            type: String,
            required: true,
            trim: true
        },
        password : {
            type: String,
            required: true
        }
    },
    { collection: 'employers' }
)

// this will keep the email field always unique
EmployerSchema.index({ email: 1 }, { unique: true })

// converting the schema to a mongoose model
const Employer = mongoose.model('Employer', EmployerSchema)

// exporting it so it can be used elsewhere
module.exports = Employer