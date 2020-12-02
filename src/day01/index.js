// const getInput = require('../utils/getInput')

// const EXPECTED_SUM = 2020
// const input = getInput('01').map(number => +number)

const getTwoEntries = (numbers, expectedSum) => {
  let found = 0

  numbers.forEach((number1, index) => {
    numbers.slice(index).forEach(number2 => {
      if (number1 + number2 === expectedSum) {
        found = number1 * number2
      }
    })
  })  
  return found
}

const getThreeEntries = (numbers, expectedSum) => {
  let found = 0
  let i = 0

  while (!found && i < numbers.length) {
    let j = i
    while (!found && j < numbers.length) {
      let k = j
      while (!found && k < numbers.length) {
        if (numbers[i] + numbers[j] + numbers[k] === expectedSum) {
          found = numbers[i] * numbers[j] * numbers[k]
        }
        k++
      }
      j++
    }
    i++
  }
  return found
}

module.exports = { getTwoEntries, getThreeEntries }

// console.time('Part 1')
// console.log(getTwoEntries(input, EXPECTED_SUM))
// console.timeEnd('Part 1')

// console.time('Part 2')
// console.log(getThreeEntries(input, EXPECTED_SUM))
// console.timeEnd('Part 2')