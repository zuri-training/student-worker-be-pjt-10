const mongoose = require('mongoose')

const ResumeSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
        required: true,
        default: '+234'
    },
    mobileNumber: {
        type: String,
        required: true,
        default: '09029880470'
    },
    currentState: {
        type: String,
        required: true,
        default: 'Lagos'
    },
    currentCity: {
        type: String,
        required: true,
        default: 'Okokomaiko'
    },
    school: {
        type: String,
    },
    course: {
        type: String,
    },
    startYear: {
        type: String,
    },
    endYear: {
        type: String,
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
})

module.exports = ResumeSchema