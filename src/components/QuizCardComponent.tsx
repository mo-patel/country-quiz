import { FC, useEffect, useState } from "react";
import "../styles/quizCardStyles.css"
import { NewQuizRequest } from "../types/NewQuizResponse";
import { OptionComponent } from "./OptionComponent";
import { WinnerComponent } from "./WinnerComponent";

interface quizCardProps {
    data: NewQuizRequest
}

export const QuizCardComponent: FC<quizCardProps> = ({data}) => {
    const [questions, setQuestions] = useState(data.questions)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [selection, setSelection] = useState("");
    const numQuestions = data.numberOfQuestions;
    const select = (option: string) => {
        setSelection(option);
        //answer checking mechanism goes here
    }
    return (
        <div className="quizCardParent">
            <h2>Country quiz</h2>
            <div className="quizCard">
                {currentQuestion > questions.length ? 
                <WinnerComponent /> :
                <>
                    <img className="adventureImg" src="/undraw_adventure.svg" alt="adventure" />
                    <div className="quiz">
                        {
                            questions.map(item => {
                                return (item.id === currentQuestion) ? 
                                <div key={item.id}>
                                    <strong>{item.text}</strong>
                                    {item.answers.map((option) => {
                                        return <OptionComponent key={option.id} option={option} iconId={0}  /> 
                                    })}
                                </div>
                                : false
                            })
                        }
                        {!!selection ? 
                            <button className="proceedBtn">{currentQuestion === questions.length ? "Finish" : "Next"}</button>
                            : false
                        }
                    </div>
                </>
                }
            </div>
        </div>
    );
}