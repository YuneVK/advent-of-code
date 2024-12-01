const { getTreesFound, getProductOfAllTreesFounded } = require('./index')
const getInput = require('../utils/getInput')

const input = getInput('03').split('\n')

const exampleData = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`.split('\n')

const STEPS = [[1, 1], [1, 3], [1, 5], [1, 7], [2, 1]]

describe('Day 3: Toboggan Trajectory', () => {
  describe('Part 1', () => {
    test('should work with an example', () => {
      expect(getTreesFound(exampleData, STEPS[1])).toBe(7)
    })

    test('should work with input', () => {
      expect(getTreesFound(input, STEPS[1])).toBe(247)
    })
  })

  describe('Part 2', () => {
    test('should work with an example', () => {
      expect(getProductOfAllTreesFounded(exampleData, STEPS)).toBe(336)
    })

    test('should work with input', () => {
      expect(getProductOfAllTreesFounded(input, STEPS)).toBe(2983070376)
    })
  })
})