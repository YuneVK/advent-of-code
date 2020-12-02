const fs = require('fs')
const path = require('path')

const makePath = day => path.join(__dirname, `../day${day}/input.txt`)

const getInput = day => {
  try {
    const data = fs.readFileSync(makePath(day), 'utf8')
    return data.split('\n')
  } catch (e) {
    console.log('Error reading file:', e.stack)
  }
}

module.exports = getInput