/**
 * this file contains the model for a job
 * created by an employer
 */

const mongoose = require('mongoose')
// const Employer = require('./employer')

const JobSchema = new mongoose.Schema(
    {
        email: {
            type: String,
        },

        title: {
            type: String,
        },
        companyName: {
            type: String,
            default: "Zuri Int'l"
        },
        location: {
            type: String,
            default: 'Lagos',
        },

        jobType: {
            type: String,
            minLength: 3,
            default: "remote"
        },

        salary: {
            type: String,
            default: '50,000'
        },

        hrsPerWeek: {
            type: String,
            default: 24
        },
        dateCreated: {
            type: String,
        },

        aboutCompany: {
            type: String,
        },
        studentResponsibility: {
            type: String,
        },
        eligibility: {
            type: String
        }
    },
    { collection: 'jobs' }
)

// converting the schema to a mongoose model
const Job = mongoose.model('Job', JobSchema)

// exporting it so it can be used elsewhere
module.exports = Job