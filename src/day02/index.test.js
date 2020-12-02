const { getTotalValidPasswordsPart1, getTotalValidPasswordsPart2 } = require('./index')
const getInput = require('../utils/getInput')

const input = getInput('02')

const exampleData = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc'
]

describe('Day 2: Report Repair - Part 1', () => {
  describe('Part 1', () => {
    test('should work with an example', () => {
      expect(getTotalValidPasswordsPart1(exampleData)).toBe(2)
    })

    test('should work with input', () => {
      expect(getTotalValidPasswordsPart1(input)).toBe(600)
    })
  })

  describe('Part 2', () => {
    test('should work with an example', () => {
      expect(getTotalValidPasswordsPart2(exampleData)).toBe(1)
    })

    test('should work with input', () => {
      expect(getTotalValidPasswordsPart2(input)).toBe(245)
    })
  })
})