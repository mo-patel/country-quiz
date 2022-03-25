import { FC, useEffect, useState } from "react";
import "../styles/quizCardStyles.css"
import { Question } from "../types/Question";
import { OptionComponent } from "./OptionComponent";

interface quizCardProps {
    data: Question[]
}

export const QuizCardComponent: FC<quizCardProps> = ({data}) => {
    const [questions, setQuestions] = useState(data)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    return (
        <div className="quizCardParent">
            <h2>Country quiz</h2>
            <div className="quizCard">
                <img className="adventureImg" src="/undraw_adventure.svg" alt="adventure" />
                <div className="quiz">
                    {
                        questions.map(item => {
                            return (item.id === currentQuestion) ? 
                            <div>
                                <p>{item.description}</p>
                                <OptionComponent /> 
                            </div>
                            : false
                        })
                    }
                </div>
            </div>
        </div>
    );
}