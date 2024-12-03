const getInput = require("../utils/getInput")

const memory = getInput("03")

const SEQUENCE_REGEX = /mul(\((\d{1,3}),(\d{1,3})\))/g
const DISABLED_SEQUENCES_REGEX = /don't\(\)(.*?)do\(\)/gs

const getCorrectSequencesValues = (memory) => {
  const match = [...memory.matchAll(SEQUENCE_REGEX)].map((sequence) => [
    +sequence[2],
    +sequence[3],
  ])

  return match
}

const getDisabledSequences = (memory) => {
  const match = [...memory.matchAll(DISABLED_SEQUENCES_REGEX)].map(
    (sequence) => sequence[0]
  )

  return match
}

const getMultiplicationMemory = (memory) => {
  const correctSequencesValues = getCorrectSequencesValues(memory)

  const multiplicationResult = correctSequencesValues.reduce(
    (multiplication, values) => {
      const [number1, number2] = values

      return multiplication + number1 * number2
    },
    0
  )

  return multiplicationResult
}

const getEnabledMultiplicationMemory = (memory) => {
  const disabledSequences = getDisabledSequences(memory)

  let cleanedMemory = memory

  disabledSequences.forEach((disabledSequence) => {
    cleanedMemory = cleanedMemory.replace(disabledSequence, "")
  })

  const multiplicationMemory = getMultiplicationMemory(cleanedMemory)

  return multiplicationMemory
}

// Part 1
const multiplicationMemory = getMultiplicationMemory(memory)

console.log({ multiplicationMemory })

// Part 2
const enabledMultiplicationMemory = getEnabledMultiplicationMemory(memory)

console.log({ enabledMultiplicationMemory })
