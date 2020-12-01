const input = require('./input')
const EXPECTED_SUM = 2020

const getTwoEntries = (input, expectedSum) => {
  let found = false
  let currentIndex = 0
  let result

  while (found === false) {
    if (currentIndex === input.length - 1) {
      found = true
    }

    const currentNum = input[currentIndex]
    const remainingNumbers = input.slice(currentIndex)

    remainingNumbers.forEach(nextNum => {
      if (currentNum + nextNum === expectedSum) {
        found = true
        result = currentNum * nextNum
      }
    })

    currentIndex++
  }
  
  return result
}

const getThreeEntries = (input, expectedSum) => {
  let found = false
  let currentIndex = 0
  let result

  while (found === false) {
    if (currentIndex === input.length - 1) {
      found = true
    }

    const currentNum = input[currentIndex]
    const remainingNumbers = input.slice(currentIndex)

    remainingNumbers.forEach((nextNum, index) => {
      const remainingNumbers2 = remainingNumbers.slice(index)
      remainingNumbers2.forEach(nextNum2 => {
        if (currentNum + nextNum + nextNum2 === expectedSum) {
          found = true
          result = currentNum * nextNum * nextNum2
        }
      })
    })

    currentIndex++
  }
  
  return result
}

console.log(getTwoEntries(input, EXPECTED_SUM))
console.log(getThreeEntries(input, EXPECTED_SUM))