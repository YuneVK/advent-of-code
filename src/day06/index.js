const getAnsweredYesQuestions = group => {
  const answers = group.replace(/\n/g, '')
  const questions = {}

  answers.split('').forEach(answer => {
    if (!questions[answer]) {
      questions[answer] = true
    }
  })

  return Object.keys(questions).length
}

const getAnsweredYesQuestionsTotalCount = data => {
  const questionsCount = data.split('\n\n').map(getAnsweredYesQuestions)
  return questionsCount.reduce((prev, curr) => curr + prev)
}

const exampleData = `abc

a
b
c

ab
ac

a
a
a
a

b`

getAnsweredYesQuestionsTotalCount(exampleData)

module.exports = { getAnsweredYesQuestionsTotalCount }