// const getInput = require('../utils/getInput')
// const input = getInput('02')

const getTotalValidPasswordsPart1 = lines => {
  return lines.filter(line => {
    const [range, letter, password] = line.replace(':', '').split(' ')
    const [min, max] = range.split('-')
    const totalInPassword = password.split('').filter(chart => chart === letter).length

    return totalInPassword >= min && totalInPassword <= max
  }).length
}

const getTotalValidPasswordsPart2 = lines => {
  return lines.filter(line => {
    const [range, letter, password] = line.replace(':', '').split(' ')
    const [position1, position2] = range.split('-')

    return (password[position1 - 1] === letter) !== (password[position2 - 1] === letter)
  }).length
}

// console.time('Part 1')
// console.log(getTotalValidPasswordsPart1(input))
// console.timeEnd('Part 1')
// console.time('Part 2')
// console.log(getTotalValidPasswordsPart2(data))
// console.timeEnd('Part 2')

module.exports = { getTotalValidPasswordsPart1, getTotalValidPasswordsPart2 }