const express = require('express')
const Student = require('../models/student')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.put('/resume', async (req, res) => {
    let data = jwt.verify(req.body.token, process.env.privateKey)
    // console.log(data)
    // console.log(req.body)
    console.log('This is what is in data', data)
    let doc = await Student.updateOne({ _id: data._id }, { $set: { resume: req.body.resume } })

    console.log(doc)
    res.json(doc)
})

module.exports = router