/**
 * this file simply acts as an object that contains all the functions 
 * needed for the signup route
 */
const EmailValidator = require('email-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const Student = require("../models/student")
const Employer = require("../models/employer")
const { validator } = require('../helper/@validate')

// TODO: serve a html file that documents this API
exports.welcome = (req, res) => res.send('Welcome to the Student Worker API')


/**
 * signs up the user and 
 * @returns a token with the user email as payload
 */
exports.signupStudent = async (req, res) => {
    // validates whether the incoming request is ok to process
    // if validation fails, it returns a description of error
    let isValid = validator(req.body);
    if (!isValid.status)
        return res.status(400).json({ error: isValid.error });

    // Check if the email already exists
    console.log('Checking if the email is unique')
    let x = await Student.findOne({ email: req.body.email })
        .catch((error) => {
            return res.status(400).json({ error })
        })
    if (x !== null)
        return res.status(400).json({ error: `This email already exists` })
    //hash the password
    console.log('Hashing the password')
    let hash = bcrypt.hashSync(req.body.password, 10) // 10 is the salt rounds

    // create a new studuent
    console.log(`Creating the student, ${req.body.firstname}...`)
    let newStudent = await Student.create({
        email: req.body.email,
        password: hash,
    })
        .catch((error) => {
            console.log(`There was an error saving the student. ${error}`)
            return res.status(400).json({ error })
        })
    console.log('This is the new student:', newStudent)

    // create a token with jwt
    console.log('Creating jwt token')
    let token = jwt.sign(newStudent._doc, req.body.email) // note the private key is the user's email
    console.log(newStudent._doc)

    // passed the validation. You can continue
    console.log('signup successful')
    return res.json({ msg: 'signup successful', token })
}


/**
 * signs up the user and 
 * @returns a token with the user email as payload
 */
exports.signupEmployer = async (req, res) => {
    // validates whether the incoming request is ok to process
    // if validation fails, it returns a description of error
    let isValid = validator(req.body);
    if (!isValid.status)
        return res.status(400).json({ error: isValid.error });

    // Check if the email already exists
    console.log('Checking if the email is unique')
    let x = await Employer.findOne({ email: req.body.email })
        .catch((error) => {
            return res.status(400).json({ error })
        })
    if (x !== null)
        return res.status(400).json({ error: `This email already exists` })
    //hash the password
    console.log('Hashing the password')
    let hash = bcrypt.hashSync(req.body.password, 10) // 10 is the salt rounds

    // create a new studuent
    console.log(`Creating the student, ${req.body.firstname}...`)
    let newStudent = await Employer.create({
        email: req.body.email,
        password: hash,
    })
        .catch((error) => {
            console.log(`There was an error saving the student. ${error}`)
            return res.status(400).json({ error })
        })
    console.log('This is the new student:', newStudent)

    // create a token with jwt
    console.log('Creating jwt token')
    let token = jwt.sign(newStudent._doc, process.env.privateKey) // note the private key

    // passed the validation. You can continue
    return res.json({ msg: 'Validation successful', token })
}
