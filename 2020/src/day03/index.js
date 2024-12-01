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

module.exports = { getTreesFound, getProductOfAllTreesFounded }