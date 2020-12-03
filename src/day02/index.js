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

module.exports = { getTotalValidPasswordsPart1, getTotalValidPasswordsPart2 }