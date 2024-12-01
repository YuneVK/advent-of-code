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