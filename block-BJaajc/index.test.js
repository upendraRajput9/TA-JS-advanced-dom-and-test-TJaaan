const {
  getFullName,
  isPalindome,
  getCircumfrence,
  getArea,
} = require(`./code/index`)

test('test for full name', () => {
  expect(getFullName('alt', 'campus')).toBe('alt campus')
  expect(getFullName('alt', 'campus')).not.toBe('altcampus')
  expect(getFullName('bharat', 'babu')).not.toBe('bharatbabu')
})

test('test for palindome', () => {
  expect(isPalindome('wow')).toBe(true)
  expect(isPalindome('tat')).toBe(true)
  expect(isPalindome('gag')).toBe(true)
  expect(isPalindome('campus')).not.toBe(true)
  expect(isPalindome('babu')).not.toBe(true)
  expect(isPalindome('bharat')).not.toBe(true)
})
