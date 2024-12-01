const { getAnsweredYesQuestionsByAnyone, getAnsweredYesQuestionsByEveryone } = require('./index')
const getInput = require('../utils/getInput')

const input = getInput('06')

const exampleData = `abc

a
b
c

ab
ac

a
a
a
a

b`

describe('Day 6: Custom Customs', () => {
  describe('Part 1', () => {
    test('should work with an example', () => {
      expect(getAnsweredYesQuestionsByAnyone(exampleData)).toBe(11)
    })

    test('should work with input', () => {
      expect(getAnsweredYesQuestionsByAnyone(input)).toBe(6259)
    })
  })

  describe('Part 2', () => {
    test('should work with an example', () => {
      expect(getAnsweredYesQuestionsByEveryone(exampleData)).toBe(6)
    })

    test('should work with input', () => {
      expect(getAnsweredYesQuestionsByEveryone(input)).toBe(3178)
    })
  })
})