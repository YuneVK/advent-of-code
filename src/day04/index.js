const getInput = require('../utils/getInput')

const input = getInput('04')

const isBetween = (num, min, max) => num >= min && num <= max

const checkBirthYear = birthYear => isBetween(birthYear, 1920, 2002)
const checkIssueYear = issueYear => isBetween(issueYear, 2010, 2020)
const checkEspirationYear = expirationYear => isBetween(expirationYear, 2020, 2030)
const checkHeight = height => {
  const regexResult = /^(\d+)(cm|in)$/.exec(height)

  if (!regexResult) return false

  const [,number, measure] = regexResult
  const range = measure === 'cm' ? [150, 193] : [59, 76]
  return isBetween(number, ...range)
}
const checkHairColor = hairColor => /^#[0-9a-f]{6}$/.test(hairColor)
const checkEyeColor = eyeColor => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(eyeColor)
const checkPassportId = passportId => /^[\d]{9}$/.test(passportId)

const VALID_FIELDS = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid'
]

const normalizePassport = passport => passport.replace(/\n/g, ' ').split(' ').sort().join('')

const getBasicValidPassports = (passports, validFields) => {
  const regex = new RegExp(`${validFields.sort().join(':.+')}:.+`)

  return passports
    .map(passport => regex.test(passport))
    .filter(isValid => isValid).length
}

const getValidationPart1 = (input, validFields = VALID_FIELDS) => {
  const passports = input.split('\n\n').map(normalizePassport)

  return getBasicValidPassports(passports, validFields)
}

const exampleData = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007

pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`

// 4 valid

console.log(getValidationPart1(input))

module.exports = { 
  getValidationPart1,
  checkBirthYear,
  checkIssueYear,
  checkEspirationYear,
  checkHeight,
  checkHairColor,
  checkEyeColor,
  checkPassportId
}
