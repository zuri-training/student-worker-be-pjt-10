const Job = require('../models/job')
const _ = require('lodash')
const jwt = require('jsonwebtoken')


// app.post('/auth/jobs', fdgh
exports.postJob = async (req, res) => {
    if (_.isEmpty(req.body))
        return res.status(400).json({ error: "your request body is empty" })
    if (!req.body.hasOwnProperty('token'))
        return res.status(400).json({ error: "you must add the token, or else login again" })

    let data = jwt.verify(req.body.token, process.env.privateKey)
    console.log('This is what is in data\n', data)
    let doc = await Job.create({ ...req.body })
        .catch((error) => {
            console.log("there's been an error o")
            return res.status(400).json({ error: 'Error creating the Job', msg: error })
        })
    console.log(doc)
    res.json({ msg: "successful", doc })
}

exports.fetchJobs = (req, res) => {

    let conditions = {};

    if (req.query.jobType) {
        conditions.jobType = req.query.jobType
    }

    Job.find(conditions, (err, jobs) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({ jobs })
        }
    })
}

exports.fetchSingleJob = (req, res) => {

    Job.findById(req.params.id, (err, job) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!job) {
            return res.status(404).json({ message: 'job not found' })
        } else {
            return res.status(200).json({ job })
        }
    })

}

exports.updateSingleJob = (req, res) => {
    Job.findByIdAndUpdate(req.params.id, {
        jobType: req.body.jobType,
        salary: req.body.salary,
        duration: req.body.duration,
        filled: req.body.filled
    }, (err, job) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!job) {
            return res.status(404).json({ message: 'job not found' })
        } else {
            job.save((err, saveJob) => {
                if (err) {
                    return res.status(400).json({ message: err })
                } else {
                    return res.status(200).json(saveJob)
                }
            })
        }
    })
}

exports.deleteSingleJob = (req, res) => {
    Job.findByIdAndDelete(req.params.id, (err, job) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!job) {
            return res.status(400).json({ message: 'job was not found' })
        } else {
            return res.status(200).json({ message: 'job deleted successfully' })
        }
    })
}
