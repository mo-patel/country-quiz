import { Question } from "./Question";

export interface NewQuizRequest {
    questions: Question[];
    createdAt: string;
    numberOfQuestions: number;
}