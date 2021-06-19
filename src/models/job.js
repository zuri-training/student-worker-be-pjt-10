/**
 * this file contains the model for a job
 * created by an employer
 */

const mongoose = require('mongoose')
const Employer = require('./employer')

const JobSchema = new mongoose.Schema(
    {
        employerEmail: {
            type: String,
            required: true,
            minLength: 5,
            trim: true
        },

        title: {
            type: String,
            required: true,
            minLength: 5,
            trim: true
        },

        location: {
            type: String,
            required: true,
            minLength: 3,
            trim: true
        },

        isRemote: {
            type: Boolean,
            required: true,
            minLength: 3,
        },

        filled: {
            type: Boolean,
            required: true,
        }
    },
    { collection: 'jobs' }
)

// converting the schema to a mongoose model
const Job = mongoose.model('Job', JobSchema)

// exporting it so it can be used elsewhere
module.exports = Job