/**
 * this file simply acts as an object that contains all the functions 
 * needed for the signup route
 */

const _ = require('lodash')
const EmailValidator = require('email-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const Student = require("../models/student")
const Employer = require("../models/employer")

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
        return res.json({ error: isValid.error });

    // Check if the email already exists
    console.log('Checking if the email is unique')
    let x = await Student.findOne({ email: req.body.email })
        .catch((err) => {
            return res.status(400).json({ err })
        })
    if (x !== null)
        return res.status(400).json({ err: `This email already exists` })
    //hash the password
    console.log('Hashing the password')
    let hash = bcrypt.hashSync(req.body.password, 10) // 10 is the salt rounds

    // create a new studuent
    console.log(`Creating the student, ${req.body.firstname}...`)
    let newStudent = await Student.create({
        email: req.body.email,
        password: hash,
    })
        .catch((err) => {
            console.log(`There was an error saving the student. ${err}`)
            return res.json({ err })
        })
    console.log('This is the new student:', newStudent)

    // create a token with jwt
    console.log('Creating jwt token')
    let token = jwt.sign(newStudent._doc, process.env.privateKey) // note the private key

    // passed the validation. You can continue
    return res.json({ msg: 'Validation successful', token })
}

// validates all the mandatory properties
let validator = (reqBody) => {
    console.log('Started request validation...')
    // checks if the request body is empty
    if (_.isEmpty(reqBody))
        return {
            error: 'your request body must not be empty',
            status: false
        }
    // validates the email
    if (!emailValidator(reqBody))
        return {
            error: 'the email is not formatted properly',
            status: false
        }
    // validates the password
    if (!passwordValidator(reqBody))
        return {
            error: 'this password is not valid',
            status: false
        }
    // passed all validations. I'm satisfied.
    console.log('Request validation successful :)')
    return {
        error: 'validation successful',
        status: true
    }
}

// checks if firstname exists and if it is long enough
exports.nameValidator = (reqBody, name) => {
    console.log(`Validating ${name}...`)
    // check if the name property exists. If it doesn't stop the validation
    let exists = reqBody.hasOwnProperty(name)
    if (!exists) return false
    // since it exists check how long it is
    if (reqBody[name].length < 3) return false
    // it exists and it is long enough. I'm statisfied.
    return true
}

// checks if the email exists and it is formatted properly
let emailValidator = (reqBody) => {
    console.log(`Validating email...`)
    // check if the email property exists. If it doesn't stop the validation
    let exists = reqBody.hasOwnProperty('email')
    if (!exists) return false
    // since it exists check if it is formatted properly
    let emailIsValid = EmailValidator.validate(reqBody.email)
    if (!emailIsValid) return false

    // it exists and it is formatted properly. I'm statisfied.
    return true
}

// Checks only the length of the password 
let passwordValidator = (reqBody) => {
    console.log('Validating password...')
    // check if the password property exists. If it doesn't stop the validation
    let exists = reqBody.hasOwnProperty('password')
    if (!exists) return false
    // since it exists check if it is long enough
    // TODO: add more password checks here
    if (reqBody.password.length < 6) return false
    // It exists, and it is long enough, I'm satisfied.
    return true
}



// - grab email from request body
// - check if the email exists
// - create a new employer
// - hash user's password
// - save password to DB
// - create jwt for employer
// - send token to employer
exports.signupEmployer = (req, res) => { }

/**
 * striclty for learning purposes
 */
exports.createStudent = async (student) => {
    if (!student)
        throw new Error('Missing student')

    await Student.create(student)
}

