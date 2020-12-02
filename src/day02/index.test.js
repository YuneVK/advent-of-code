const { getTotalValidPasswords } = require('./index')
const getInput = require('../utils/getInput')

const input = getInput('02')

describe('Day 2: Report Repair - Part 1', () => {
  describe('Part 1', () => {
    test('should work with an example', () => {
      const data = [
        '1-3 a: abcde',
        '1-3 b: cdefg',
        '2-9 c: ccccccccc'
      ]

      expect(getTotalValidPasswords(data)).toBe(2)
    })

    test('should work with input', () => {
      expect(getTotalValidPasswords(input)).toBe(600)
    })
  })

  describe('Part 2', () => {
    test('should work with input', () => {
      expect(true).toBe(true)
    })
  })
})