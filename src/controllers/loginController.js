const Employer = require("../models/employer");
const Student = require("../models/student");
const { validator } = require('../helper/@validate')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.loginStudent = async (req, res) => {
  console.log('validating the request body')
  let isValid = validator(req.body)
  if (!isValid.status)
    return res.status(400).json({ error: isValid.error })

  console.log('checking if the user exists')
  let doc = await Student.findOne({ email: req.body.email })
    .catch((error) => {
      return res.status(400).json({ error })
    })
  if (doc === null)
    return res.status(400).json({ error: `this email does not exist in our database` })
  console.log(doc)

  console.log('comparing the password')
  let passwordIsCorrect = bcrypt.compareSync(req.body.password, doc.password)
  if (!passwordIsCorrect)
    return res.status(400).json({ error: `this email and password does not match our records` })

  console.log('creating jwt')
  let token = jwt.sign({ ...doc }, req.body.email) // note the private key is the user's email

  // passed the validation. You can continue
  console.log('login successful')
  return res.json({ msg: 'Login successful', token })
}


exports.loginEmployer = async (req, res) => {
  console.log('validating the request body')
  let isValid = validator(req.body)
  if (!isValid.status)
    return res.status(400).json({ error: isValid.error })

  console.log('checking if the user exists')
  let doc = await Employer.findOne({ email: req.body.email })
    .catch((error) => {
      return res.status(400).json({ error })
    })
  if (doc === null)
    return res.status(400).json({ error: `this email does not exist in our database` })
  console.log(doc)

  console.log('comparing the password')
  let passwordIsCorrect = bcrypt.compareSync(req.body.password, doc.password)
  if (!passwordIsCorrect)
    return res.status(400).json({ error: `this email and password does not match our records` })

  console.log('creating jwt')
  let token = jwt.sign({ ...doc }, req.body.email) // note the private key is the user's email

  // passed the validation. You can continue
  console.log('login successful')
  return res.json({ msg: 'Login successful', token })
}