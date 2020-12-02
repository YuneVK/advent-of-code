const getInput = require('../utils/getInput')

const input = getInput('02')

const getTotalValidPasswords = lines => {
  return lines.filter(line => {
    const [range, letter, password] = line.replace(':', '').split(' ')
    const [min, max] = range.split('-')
    const totalInPassword = password.split('').filter(chart => chart === letter).length

    return totalInPassword >= min && totalInPassword <= max

    // with regex (WIP)
    // const regex = new RegExp(`${letter}{${min},${max}}`)
    // return regex.test(password)
  }).length
}

const data = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc'
]

console.time('Part 1')
console.log(getTotalValidPasswords(input))
console.timeEnd('Part 1')

module.exports = { getTotalValidPasswords }