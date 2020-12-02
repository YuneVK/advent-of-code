const { getTwoEntries, getThreeEntries } = require('./index')
const getInput = require('../utils/getInput')

const EXPECTED_SUM = 2020
const input = getInput('01').map(number => +number)

describe('Day 1: Report Repair - Part 1', () => {
  describe('Part 1', () => {
    test('should work with input', () => {
      expect(getTwoEntries(input, EXPECTED_SUM)).toBe(1013211)
    })
  })

  describe('Part 2', () => {
    test('should work with input', () => {
      expect(getThreeEntries(input, EXPECTED_SUM)).toBe(13891280)
    })
  })
})