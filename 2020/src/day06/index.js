const getAnsweredYesQuestions = group => {
  const answers = group.replace(/\n/g, '')
  const questions = {}

  answers.split('').forEach(answer => {
    if (!questions.hasOwnProperty(answer)) {
      questions[answer] = 1
    } else {
      questions[answer]++
    }
  })

  return questions
}

const getAnsweredYesQuestionsByAnyone = data => {
  const questionsCount = data
    .split('\n\n')
    .map(group => {
      const answeredQuestions = getAnsweredYesQuestions(group)
      return Object.keys(answeredQuestions).length
    })
  return questionsCount.reduce((prev, curr) => curr + prev)
}

const getAnsweredYesQuestionsByEveryone = data => {
  const questionsCount = data
    .split('\n\n')
    .map(group => {
      const answeredQuestions = getAnsweredYesQuestions(group)
      const countQuestions = Object.values(answeredQuestions)
      const peopleInGroup = group.split('\n').length

      return countQuestions.filter(answered => answered === peopleInGroup).length
    })
  return questionsCount.reduce((prev, curr) => curr + prev)
}

module.exports = { getAnsweredYesQuestionsByAnyone, getAnsweredYesQuestionsByEveryone }