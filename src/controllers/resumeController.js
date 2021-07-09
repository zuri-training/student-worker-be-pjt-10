const Student = require('../models/student')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

exports.createResume = async (req, res) => {
    if (_.isEmpty(req.body))
        return res.status(400).json({ error: "your request body is empty" })
    if (!req.body.hasOwnProperty('token'))
        return res.status(400).json({ error: "you must add the token, or else login again" })

    let data = jwt.verify(req.body.token, process.env.privateKey)
    console.log('This is what is in data', data)
    let doc = await Student.updateOne({ _id: data._id }, { $set: { ...req.body } })
        .catch((error) => { return res.status(400).json(error) })
    console.log(doc)
    res.json({ msg: "successful", data })
}