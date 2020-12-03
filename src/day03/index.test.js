const { getTreesFound } = require('./index')
const getInput = require('../utils/getInput')

const input = getInput('03')

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

describe('Day 3: Toboggan Trajectory', () => {
  describe('Part 1', () => {
    test('should work with an example', () => {
      expect(getTreesFound(exampleData)).toBe(7)
    })

    test('should work with input', () => {
      expect(getTreesFound(input)).toBe(247)
    })
  })

  // describe('Part 2', () => {
  //   test('should work with an example', () => {
  //     expect(getTotalValidPasswordsPart2(exampleData)).toBe(1)
  //   })

  //   test('should work with input', () => {
  //     expect(getTotalValidPasswordsPart2(input)).toBe(245)
  //   })
  // })
})