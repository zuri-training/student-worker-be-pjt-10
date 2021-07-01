const { nameValidator } = require('../controllers/signupController')

test('Name validator should return true with this name: Febe', () => {
    const result = nameValidator({ firstname: 'Febe' }, 'firstname')
    expect(result).toBe(true)
})

test('Name validator should return false with this name: AB', () => {
    const result = nameValidator({ firstname: 'AB' }, 'firstname')
    expect(result).toBe(false)
})