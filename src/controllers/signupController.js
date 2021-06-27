/**
 * this file simply acts as an object that contains all the functions 
 * needed for the signup route
 */

const Student = require("../models/student")
const Employer = require("../models/employer")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = 'verySecureSECRET'
const expiryInSeconds = 3600


// TODO: serve a html file that documents this API
exports.welcome = (req, res) => res.send('Welcome to the Student Worker API')


// TODO: 
// - grab email from request body
// - check if the email exists
// - create a new student
// - hash user's password
// - save password to DB
// - create jwt for student
// - send token to student
exports.signupStudent = (req, res) => {
    // grab email from request body
    // check if the email exists
    Student.findOne({ email: req.body.email }, (err, existingStudent) => {
        if (err)
            return res.status(500).json({ err })
        if (existingStudent)
            return res.status(400).json({ message: "A student with this email already exists" })
    })
    // create a new student
    Student.create({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        school: req.body.school
    }, (err, newStudent) => {
        if (err)
            return res.status(500).json({ err })
        // hash user's password
        bcrypt.genSalt(10, (err, salt) => {
            if (err)
                return res.status(500).json({ err })
            bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                if (err)
                    return res.status(500).json({ err })
                newStudent.password = hashedPassword
                newStudent.save((err, savedStudent) => {
                    if (err)
                        return res.status(500).json({ err })
                    jwt.sign(
                        {
                            id: newStudent._id,
                            email: newStudent.email,
                            firstname: newStudent.firstname,
                            lastname: newStudent.lastname
                        }, secret, { expiresIn: expiryInSeconds }, (err, token) => {
                            if (err)
                                return res.status(500).json({ err })
                            return res.status(200).json({ message: 'Student signup successful', token })
                        })
                })
            })
        })
    })



}

// - grab email from request body
// - check if the email exists
// - create a new employer
// - hash user's password
// - save password to DB
// - create jwt for employer
// - send token to employer
exports.signupEmployer = (req, res) => { }

// this controller only works for the student database model
// exports.studentSignup = (req, res) => {

//  // Validate request
//   if(!req.body) {
//     return res.status(400).json({
//         message: "all fields can not be empty"
//     });
// }

// Register student
// const student = new Student({
//     email: req.body.email,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     school: req.body.school,
//     password: bcrypt.hashSync(req.body.password)
// });

// // Save student in the database
// student.save()
// .then(data => {
//     res.status(200).json({
//         message: 'student successfully registered',
//         data: data
//     });
//  })
//  .catch(err => {
//     res.status(500).json({
//         message: err.message || "Some error occurred while registering user."
//     });
// });
// };

