const { getAnsweredYesQuestionsTotalCount } = require('./index')
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
      expect(getAnsweredYesQuestionsTotalCount(exampleData)).toBe(11)
    })

    test('should work with input', () => {
      expect(getAnsweredYesQuestionsTotalCount(input)).toBe(951)
    })
  })

  // describe('Part 2', () => {
  //   test('should work with an example', () => {
  //     expect(getHighestSeatID(examplePasses)).toBe(820)
  //   })

  //   test('should work with input', () => {
  //     expect(getMissingSeat(input)).toBe(653)
  //   })
  // })
})