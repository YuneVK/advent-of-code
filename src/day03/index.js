const getInput = require('../utils/getInput')
const input = getInput('03')

const STEP = [1, 3]

const getTreesFound = (map, step = STEP) => {
  let position = step
  const points = []
  const mapWidth = map[0].length
  const mapHeight = map.length

  while (position[0] < mapHeight) {
    points.push(map[position[0]][position[1]])
    position = [position[0] + step[0], position[1] + step[1]]
    
    if (position[1] >= mapWidth) {
      position[1] = position[1] - mapWidth
    }
  }

  return points.filter(point => point === "#").length
}

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

console.time('Part 1')
console.log(getTreesFound(input, STEP))
console.timeEnd('Part 1')

module.exports = { getTreesFound }