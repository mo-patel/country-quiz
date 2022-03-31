import React, { FC, useEffect, useState } from "react";
import "../styles/quizCardStyles.css"
import { Answer } from "../types/Answer";
import { NewQuizResponse } from "../types/NewQuizResponse";
import { Question } from "../types/Question";
import { OptionComponent } from "./OptionComponent";
import { WinnerComponent } from "./WinnerComponent";

interface QuizCardComponentProps {
    data: NewQuizResponse;
}

export const QuizCardComponent: FC<QuizCardComponentProps> = ({data}) => {
    const [questions, setQuestions] = useState<Question[]>(data?.questions)
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selection, setSelection] = useState<number>(0);
    const [incorrect, setIncorrect] = useState<number>(0)
    const [correctResponses, setCorrectResponses] = useState<number>(0);
    const [quizComplete, setQuizComplete] = useState<boolean>(false);
    let question: Question | null = data ? questions[currentQuestion]: null;
    const clearState = (): void => {
        setIncorrect(0);
        setSelection(0);
    }
    useEffect(()=>{
        clearState();
    }, [currentQuestion])
    
    const proceed = (complete?: boolean): void => {
        if(complete){
            setQuizComplete(true)
            return;
        }
        setCurrentQuestion(currentQuestion + 1)
    }
    
    const select = (option: Answer): void => {
        if(selection > 0)
            return;
        setSelection(option.id);
        if(option.correct){
            setCorrectResponses(correctResponses + 1);
        }
        else{
            setIncorrect(option.id)
        }
    }

    const retry = (): void => {
        window.location.reload();
    }
    if(!question){
        return <p>waiting..</p>
    }
    return (
        <div className="quizCardParent">
            <h2>Country quiz</h2>
            <div className="quizCard">
                {quizComplete ? 
                <WinnerComponent correctAnswers={correctResponses} retryCb={retry} /> :
                <>
                    <img className="adventureImg" src="/undraw_adventure.svg" alt="adventure" />
                    <div className="quiz">
                        {
                            <div>
                                {question.mediaUrl ? <img className="flagImg" src={question.mediaUrl} alt="flag" /> : null}
                                <strong>{question.text}</strong>
                                {question.answers.map((option: Answer, idx: number) => {
                                    return <OptionComponent key={option.id} option={option} selected={selection} idx={idx}
                                    showIcon={selection === option.id || incorrect === option.id} incorrectId={incorrect} optionSelectCb={select}  /> 
                                })}
                            </div>    
                        }
                        {selection ? 
                            <button className="proceedBtn" onClick={()=> proceed((currentQuestion + 1) === questions.length)}>
                                {(currentQuestion + 1) === questions.length ? "Finish" : "Next"}
                            </button>
                            : false
                        }
                    </div>
                </>
                }
            </div>
        </div>
    );
}