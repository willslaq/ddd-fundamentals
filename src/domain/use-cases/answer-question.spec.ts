import { AnswerQuestionUseCase } from "./answer-question";
import { expect, test } from "vitest";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.execute({
    questionId: "1",
    instructorId: "2",
    content: "content",
  });

  expect(answer.content).toEqual("content");
});
