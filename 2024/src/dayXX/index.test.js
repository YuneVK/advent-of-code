const { foo } = require("./index")
const getInput = require("../utils/getInput")

const EXPECTED_SUM = 20020

const input = getInput("0X")
  .split("\n")
  .map((number) => +number)

describe("Day X: TODO", () => {
  describe("Part 1", () => {
    test("should work with input", () => {
      expect(getTwoEntries(input, EXPECTED_SUM)).toBe(0)
    })
  })

  describe("Part 2", () => {
    test("should work with input", () => {
      expect(getThreeEntries(input, EXPECTED_SUM)).toBe(0)
    })
  })
})
