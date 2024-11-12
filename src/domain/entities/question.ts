import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface QuestionProps {
  authorId: string;
  bestAnswerId: UniqueEntityID | null;
  title: string;
  content: string;
  slug: Slug;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export class Question extends Entity<QuestionProps> {}
