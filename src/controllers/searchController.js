const mongoose = require('mongoose')
const Job = require('../models/job')

exports.search = async (req, res) => {
    let jobs = await Job.find(req.query)
        .catch((error) => res.status(400).json({ error }))
    res.json({ jobs })

}