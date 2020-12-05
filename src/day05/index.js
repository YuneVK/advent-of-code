const PLANE = {
  rows: 127,
  cols: 8
}

const PARTITION_TYPES = {
  lower: 'lower',
  upper: 'upper'
}

const ROW_KEYS = {
  [PARTITION_TYPES.lower]: 'F',
  [PARTITION_TYPES.upper]: 'B'
}

const COLUMN_KEYS = {
  [PARTITION_TYPES.lower]: 'L',
  [PARTITION_TYPES.upper]: 'R'
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value)
}

const getPartitioning = (code, keys, range) => {
  const chart = code[0]
  const partitionType = getKeyByValue(keys, chart)
  const newRange = range

  if (partitionType === PARTITION_TYPES.lower) {
    newRange[1] = Math.floor((range[1] / 2) + (range[0] / 2))
  } else if (partitionType === PARTITION_TYPES.upper) {
    newRange[0] = Math.ceil((range[1] / 2) + (range[0] / 2))
  }

  const newCode = code.substring(1)

  return newCode ? getPartitioning(newCode, keys, newRange) : newRange[0]
}

const decodeBoardingPass = (pass, plane = PLANE) => {
  const rowsCode = pass.slice(0,7)
  const colsCcode = pass.slice(7)

  const row = getPartitioning(rowsCode, ROW_KEYS, [0, plane.rows])
  const col = getPartitioning(colsCcode, COLUMN_KEYS, [0, plane.cols])

  return { row, col }
}

const getSeatID = (pass, plane = PLANE) => {
  const { row, col } = decodeBoardingPass(pass, plane)
  return row * 8 + col
}

const getSeatIDList = (passes, plane = PLANE) => {
  return passes
    .map(pass => getSeatID(pass, plane))
    .sort((a, b) => b - a)
}

const getHighestSeatID = (passes, plane = PLANE) => {
  return getSeatIDList(passes, plane)[0]
}

const pass = 'FBFBBFFRLR'

const passes = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`.split('\n')

console.log(getHighestSeatID(passes))

module.exports = { decodeBoardingPass, getSeatID, getHighestSeatID }