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

const VALID_FIELDS = {
  byr: checkBirthYear,
  iyr: checkIssueYear,
  eyr: checkEspirationYear,
  hgt: checkHeight,
  hcl: checkHairColor,
  ecl: checkEyeColor,
  pid: checkPassportId
}

const OPTIONAL_FIELDS = [ 'cid' ]

const VALID_FIELDS_KEYS = Object.keys(VALID_FIELDS)

const normalizePassport = passport => passport.replace(/\n/g, ' ').split(' ').sort().join(' ')

const getBasicValidPassports = (passports, validFields) => {
  const regex = new RegExp(`${validFields.sort().join(':.+')}:.+`)

  return passports.filter(passport => regex.test(passport))
}

const getValidationPart1 = (input, validFields = VALID_FIELDS_KEYS) => {
  const passports = input.split('\n\n').map(normalizePassport)

  return getBasicValidPassports(passports, validFields).length
}

const getValidationPart2 = (input, validFields = VALID_FIELDS, optionalFields = OPTIONAL_FIELDS) => {
  const passports = input.split('\n\n').map(normalizePassport)
  const basicValidPassports = getBasicValidPassports(passports, Object.keys(validFields))

  return basicValidPassports.filter(passport => {
    const fields = passport.split(' ')
    return fields.every(field => {
      const [key, value] = field.split(':')
      return optionalFields.includes(key) ? true : validFields[key](value)
    })
  }).length
}

module.exports = { 
  getValidationPart1,
  getValidationPart2,
  checkBirthYear,
  checkIssueYear,
  checkEspirationYear,
  checkHeight,
  checkHairColor,
  checkEyeColor,
  checkPassportId
}
