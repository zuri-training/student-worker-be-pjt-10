const _ = require('lodash')
const EmailValidator = require('email-validator')
// validates all the mandatory properties
exports.validator = (reqBody) => {
    console.log('Started request validation...')
    // checks if the request body is empty
    if (_.isEmpty(reqBody))
        return {
            error: 'your request body must not be empty',
            status: false
        }
    // validates the email
    if (!this.emailValidator(reqBody))
        return {
            error: 'the email is not formatted properly',
            status: false
        }
    // validates the password
    if (!this.passwordValidator(reqBody))
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
exports.emailValidator = (reqBody) => {
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
exports.passwordValidator = (reqBody) => {
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