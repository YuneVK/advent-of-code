const { decodeBoardingPass, getSeatID, getHighestSeatID } = require('./index')
const getInput = require('../utils/getInput')

const input = getInput('05').split('\n')

const examplePass = 'FBFBBFFRLR'

const examplePasses = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`.split('\n')

describe('Day 5: Binary Boarding', () => {
  describe('Decode boarding pass', () => {
    test('should calculate rows and cols when input is FBFBBFFRLR', () => {
      expect(decodeBoardingPass(examplePass)).toStrictEqual({row: 44, col: 5})
    })
  })

  describe('Calculate seat ID', () => {
    test('should return 357 when input is FBFBBFFRLR', () => {
      expect(getSeatID(examplePass)).toBe(357)
    })
  })

  describe('Part 1', () => {
    test('should work with an example', () => {
      expect(getHighestSeatID(examplePasses)).toBe(820)
    })

    test('should work with input', () => {
      expect(getHighestSeatID(input)).toBe(951)
    })
  })

  // describe('Part 2', () => {
  //   test('should work with an example', () => {
  //     expect(getTotalValidPasswordsPart1(exampleData)).toBe(2)
  //   })

  //   test('should work with input', () => {
  //     expect(getThreeEntries(input, EXPECTED_SUM)).toBe(13891280)
  //   })
  // })
})