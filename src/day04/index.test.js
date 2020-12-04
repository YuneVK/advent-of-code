const { 
  getValidPassports,
  checkBirthYear,
  checkIssueYear,
  checkEspirationYear,
  checkHeight,
  checkHairColor,
  checkEyeColor,
  checkPassportId
} = require('./index')
const getInput = require('../utils/getInput')

const input = getInput('04')

const exampleDataPart1 = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`

const exampleDataPart2 = `eyr:1972 cid:100
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


describe('Day 4: Passport Processing', () => {
  describe('Part 1', () => {
    test('should work with an example', () => {
      expect(getValidPassports(exampleDataPart1)).toBe(2)
    })

    test('should work with input', () => {
      expect(getValidPassports(input)).toBe(182)
    })
  })

  describe('Fields validation', () => {
    describe('Birth Year', () => {
      test('should return true when value is 2002', () => {
        expect(checkBirthYear(2002)).toBe(true)
      })
      test('should return false when value is 2003', () => {
        expect(checkBirthYear(2003)).toBe(false)
      })
    })
    describe('Issue Year', () => {
      test('should return true when value is 2015', () => {
        expect(checkIssueYear(2015)).toBe(true)
      })
      test('should return true when value is 2020', () => {
        expect(checkIssueYear(2020)).toBe(true)
      })
      test('should return false when value is 1900', () => {
        expect(checkIssueYear(1900)).toBe(false)
      })
    })
    describe('Expiration Year', () => {
      test('should return true when value is 2022', () => {
        expect(checkEspirationYear(2022)).toBe(true)
      })
      test('should return true when value is 2030', () => {
        expect(checkEspirationYear(2030)).toBe(true)
      })
      test('should return false when value is 2000', () => {
        expect(checkEspirationYear(2000)).toBe(false)
      })
    })
    describe('Height', () => {
      test('should return true when value is 60in', () => {
        expect(checkHeight('60in')).toBe(true)
      })
      test('should return true when value is 190cm', () => {
        expect(checkHeight('190cm')).toBe(true)
      })
      test('should return false when value is 190in', () => {
        expect(checkHeight('190in')).toBe(false)
      })
      test('should return false when value is 190', () => {
        expect(checkHeight('190')).toBe(false)
      })
    })
    describe('Hair Color', () => {
      test('should return true when value is #123abc', () => {
        expect(checkHairColor('#123abc')).toBe(true)
      })
      test('should return false when value is #123abz', () => {
        expect(checkHairColor('#123abz')).toBe(false)
      })
      test('should return false when value is 123abc', () => {
        expect(checkHairColor('123abc')).toBe(false)
      })
    })
    describe('Eye Color', () => {
      test('should return true when value is brn', () => {
        expect(checkEyeColor('brn')).toBe(true)
      })
      test('should return false when value is wat', () => {
        expect(checkEyeColor('wat')).toBe(false)
      })
    })
    describe('Passport ID', () => {
      test('should return true when value is 000000001', () => {
        expect(checkPassportId('000000001')).toBe(true)
      })
      test('should return false when value is 0123456789', () => {
        expect(checkPassportId('0123456789')).toBe(false)
      })
    })
  })

  // describe('Part 2', () => {
  //   test('should work with an example', () => {
  //     expect(getProductOfAllTreesFounded(exampleData)).toBe(336)
  //   })

  //   test('should work with input', () => {
  //     expect(getProductOfAllTreesFounded(input)).toBe(2983070376)
  //   })
  // })
})
