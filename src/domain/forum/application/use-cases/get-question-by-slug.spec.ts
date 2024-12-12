import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { makeQuestion } from "test/factories/make-question";
import { Slug } from "../../enterprise/entities/value-objects/slug";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let getQuestionBySlugUseCase: GetQuestionBySlugUseCase;

describe("Get question by slug", () => {
	beforeEach(() => {
		inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
		getQuestionBySlugUseCase = new GetQuestionBySlugUseCase(
			inMemoryQuestionsRepository,
		);
	});

	it("should be able to get a question by slug", async () => {
		const newQuestion = makeQuestion({
			slug: Slug.create("example-question-slug"),
		});

		await inMemoryQuestionsRepository.create(newQuestion);

		const { question } = await getQuestionBySlugUseCase.execute({
			slug: "example-question-slug",
		});

		expect(question.slug.value).toEqual("example-question-slug");
	});
});
