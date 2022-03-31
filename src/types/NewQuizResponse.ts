import { Question } from "./Question";

export interface NewQuizResponse {
    questions: Question[];
    createdAt: string;
    numberOfQuestions: number;
}