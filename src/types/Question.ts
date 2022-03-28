import { Answer } from "./Answer";

export interface Question {
    id: number;
    text: string;
    mediaUrl: string;
    type: string;
    answers: Answer[];
}