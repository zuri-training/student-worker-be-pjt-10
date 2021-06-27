/**
 * this file contains the model for a job
 * created by an employer
 */

const mongoose = require('mongoose')
// const Employer = require('./employer')

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

       jobType: {
            type: String,
            required: true,
            minLength: 3,
            enum: ["unknown", "remote", "on-site"],
            default: "unknown"
        },

        salary: {
            type: String,
            required: true
        },

        hrsPerWeek: {
            type: String,
            required: true
        },

        duration: {
            type: String,
            required: true
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