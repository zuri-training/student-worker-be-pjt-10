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
        password: {
            type: String,
            required: true
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
        city: {
            type: String,
            required: true,
            default: 'Katangora'
        },
        companyName: {
            type: String,
        },
        description: {
            type: String,
        },
        address: {
            type: String,
        },

    },
    { collection: 'employers' }
)

// this will keep the email field always unique
EmployerSchema.index({ email: 1 }, { unique: true })

// converting the schema to a mongoose model
const Employer = mongoose.model('Employer', EmployerSchema)

// exporting it so it can be used elsewhere
module.exports = Employer