// const mongoose = require('mongoose')
// const dbHandler = require('./db-handler')
const signupCtrl = require('../controllers/signupController')

test('Name validator should return true with this name: Febe', () => {
    const result = signupCtrl.nameValidator({ firstname: 'Febe' }, 'firstname')
    expect(result).toBe(true)
})

test('Name validator should return false with this name: AB', () => {
    const result = signupCtrl.nameValidator({ firstname: 'AB' }, 'firstname')
    expect(result).toBe(false)
})

// /**
//  * connect to an in-memory database before run this test
//  */
// beforeAll(async () => await dbHandler.connect())

// /**
//  * Clear all test data for every test
//  */
// afterEach(async () => await dbHandler.clearDatabase())

// /**
//  * Remove and close the db and server
//  */
// afterAll(async () => await dbHandler.closeDatabase())

// /**
//  * student signup test suite
//  */
// describe('Student', () => {
//     /**
//      * 
//      */
//     it('can signup correctly', async () => {
//         expect(async () => await signupCtrl.createStudent(testStudent))
//     })
// })

// /**
//  * student example
//  */
// const testStudent = {
//     firstname: "Febe",
//     lastname: "Mitchel",
//     email: "febemitch1@gmail.com",
//     school: "Unilag",
//     password: "hallelujah"
// }