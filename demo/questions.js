const questions = [
  {
    instruction: 'Complete the following sentence using a word from the list.',
    text: 'A lot of trains ____ late today due to the heavy storms.',
    correct: 1,
    answers: [
      'are run',
      'are running',
      'run'
    ]
  },
  {
    instruction: 'Complete the following sentence using a word from the list.',
    text: '____ was a strong wind last night.',
    correct: 0,
    answers: [
      'There',
      'Here',
      'This'
    ]
  },
  {
    instruction: 'Complete the following sentence using a word from the list.',
    text: ['A: This is such an improvement on his last book.', 'B:  I have to agree, that last one was just ____.'],
    correct: 2,
    answers: [
      'approximate',
      'amusing',
      'dreadful'
    ]
  }
]

export default questions
