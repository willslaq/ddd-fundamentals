import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { makeQuestion } from "test/factory/make-question";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let getQuestionBySlugUseCase: GetQuestionBySlugUseCase;

describe("Get question by slug", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    getQuestionBySlugUseCase = new GetQuestionBySlugUseCase(
      inMemoryQuestionsRepository
    );
  });

  it("should be able to get a question by slug", async () => {
    const newQuestion = makeQuestion()

    await inMemoryQuestionsRepository.create(newQuestion);

    const { question } = await getQuestionBySlugUseCase.execute({
      slug: "example-question-slug",
    });

    expect(question.slug.value).toEqual("example-question-slug");
  });
});
