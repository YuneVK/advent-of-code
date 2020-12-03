// const getInput = require('../utils/getInput')
// const input = getInput('03')

// const STEPS = [[1, 1], [1, 3], [1, 5], [1, 7], [2, 1]]

const getTreesFound = (map, step) => {
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

const getProductOfAllTreesFounded = (map, steps) => {
  return steps
    .map(step => getTreesFound(map, step))
    .reduce((prev, acc) => acc * prev, 1)
}

// console.time('Part 1')
// console.log(getTreesFound(input, STEPS[1]))
// console.timeEnd('Part 1')
// console.time('Part 2')
// console.log(getProductOfAllTreesFounded(input, STEPS))
// console.timeEnd('Part 2')

module.exports = { getTreesFound, getProductOfAllTreesFounded }