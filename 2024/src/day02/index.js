const getInput = require("../utils/getInput")

const MAX_SAFETY_TOLERATE = 3

const LEVELS_STRATEGY = {
  INCREASING: "increasing",
  DECREASING: "decreasing",
}

const reports = getInput("02")
  .split("\n")
  .map((report) => report.split(" ").map(Number))

const removeArrayElementByIndex = (array, index) =>
  array.filter((_, i) => i !== index)

const getStrategy = (number1, number2) =>
  number1 > number2 ? LEVELS_STRATEGY.DECREASING : LEVELS_STRATEGY.INCREASING

const getIsValidStrategy = (number1, number2, strategy) => {
  switch (strategy) {
    case LEVELS_STRATEGY.INCREASING:
      return number1 < number2
    case LEVELS_STRATEGY.DECREASING:
      return number1 > number2
    default:
      return false
  }
}

const getIsValidTolerate = (number1, number2) => {
  const max = Math.max(number1, number2)
  const min = Math.min(number1, number2)

  const isValidTolerate = max - min <= MAX_SAFETY_TOLERATE

  return isValidTolerate
}

const getIsReportSafe = (report) => {
  let strategy

  const isSafe = report.every((value, index) => {
    if (index === 0) {
      return true
    }

    const prevValue = report[index - 1]

    if (!strategy) {
      strategy = getStrategy(prevValue, value)
    }

    const isValidStrategy = getIsValidStrategy(prevValue, value, strategy)
    const isValidTolerate = getIsValidTolerate(prevValue, value)

    return isValidStrategy && isValidTolerate
  })

  return isSafe
}

const getReportsSafetyCount = (reports) => {
  const safeReports = reports.filter(getIsReportSafe)

  return safeReports.length
}

const getReportsSafetyWithProblemDampenerCount = (reports) => {
  const safetyReports = reports.map((report) => {
    const safetyWithVariants = report.map((value, index) => {
      const reportToCheck = removeArrayElementByIndex(report, index)

      const isReportSafe = getIsReportSafe(reportToCheck)

      return isReportSafe
    })

    return safetyWithVariants.some((isVariantSafe) => isVariantSafe)
  })

  const safeReports = safetyReports.filter((isSafeReport) => isSafeReport)

  return safeReports.length
}

// Part 1
const reportsSafetyCount = getReportsSafetyCount(reports)

console.log({ reportsSafetyCount })

// Part 2
const reportsSafetyWithProblemDampenerCount =
  getReportsSafetyWithProblemDampenerCount(reports)

console.log({ reportsSafetyWithProblemDampenerCount })
