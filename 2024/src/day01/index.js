const getInput = require("../utils/getInput")

const getArraySum = (array) => array.reduce((sum, number) => sum + number)

const lists = getInput("01")
  .split("\n")
  .map((numbers) => numbers.split("   "))
  .reduce(
    (lists, numbers) => {
      lists[0].push(numbers[0])
      lists[1].push(numbers[1])

      return lists
    },
    [[], []]
  )

// Part 1
const getTotalDistance = (lists) => {
  const orderedLists = lists.map((list) => list.sort())

  const distances = lists[0].map((_, index) => {
    const numbers = [lists[1][index], lists[0][index]].sort()

    return numbers[1] - numbers[0]
  })

  const totalDistance = getArraySum(distances)

  return totalDistance
}

console.log(getTotalDistance(lists))

// Part 2
const getSimilarityScore = (lists) => {
  const [leftList, rightList] = lists

  const numberAppearances = leftList.reduce((acc, leftNumber) => {
    let appearances = 0

    rightList.forEach((rightNumber) => {
      if (leftNumber === rightNumber) {
        appearances++
      }
    })

    return [...acc, [leftNumber, appearances]]
  }, [])

  const scores = numberAppearances.map(([number, appearances]) => {
    return appearances === 0 ? 0 : number * appearances
  })

  const totalScore = getArraySum(scores)

  return totalScore
}

console.log(getSimilarityScore(lists))
