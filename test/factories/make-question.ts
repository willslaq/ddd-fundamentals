import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
	Question,
	type QuestionProps,
} from "@/domain/forum/enterprise/entities/question";
import { Slug } from "@/domain/forum/enterprise/entities/value-objects/slug";

export function makeQuestion(override: Partial<QuestionProps> = {}) {
	const question = Question.create({
		authorId: new UniqueEntityID(),
		title: "Example question",
		slug: Slug.create("example-question-slug"),
		content: "Example question content",
		...override
	});

	return question;
}
