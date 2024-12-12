import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { AnswerQuestionUseCase } from './answer-question'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let answerQuestion: AnswerQuestionUseCase

describe('Create Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    answerQuestion = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  test('create an answer', async () => {
    const { answer } = await answerQuestion.execute({
      questionId: '1',
      instructorId: '2',
      content: 'content',
    })

    expect(answer.content).toEqual('content')
    expect(answer.authorId).toEqual(new UniqueEntityID('2'))
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id)
  })
})
