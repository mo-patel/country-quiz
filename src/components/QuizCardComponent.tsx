import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import "../styles/quizCardStyles.css"
import { Answer } from "../types/Answer";
import { NewQuizRequest } from "../types/NewQuizResponse";
import { OptionComponent } from "./OptionComponent";
import { WinnerComponent } from "./WinnerComponent";

interface quizCardProps {
    data: NewQuizRequest
}

export const QuizCardComponent: FC<quizCardProps> = ({data}) => {
    const [questions, setQuestions] = useState(data.questions)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selection, setSelection] = useState(0);
    const [incorrect, setIncorrect] = useState(0)
    const [correctResponses, setCorrectResponses] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false);
    const refs: RefObject<any> = useRef([1,2,3,4].map(()=> React.createRef())); //mapping array of 4 possible answers
    let question: any = questions[currentQuestion];
    useEffect(()=>{
        clearState();
        question = questions[currentQuestion];
    }, [currentQuestion])

    const clearState = () => {
        setIncorrect(0);
        setSelection(0);
    }

    const proceed = (complete? :boolean): void => {
        if(complete){
            setQuizComplete(true)
            return;
        }
        setCurrentQuestion(currentQuestion + 1)
    }
    
    const select = (option: Answer) => {
        if(selection > 0)
            return;
        setSelection(option.id);
        let allAnswers = questions[currentQuestion].answers;
        let correctIdx = allAnswers.findIndex(ans => ans.correct);
        let currentIdx = allAnswers.findIndex(ans => ans === option);
        refs.current[currentIdx].current.className = refs.current[currentIdx].current.className + " selected"
        refs.current[correctIdx].current.style.backgroundColor = "#60BF88"; //green
        if(option.correct){
            setCorrectResponses(correctResponses + 1);
        }
        else{
            setIncorrect(option.id)
            refs.current[currentIdx].current.style.backgroundColor = "#EA8282"; //red
        }
    }
    return (
        <div className="quizCardParent">
            <h2>Country quiz</h2>
            <div className="quizCard">
                {quizComplete ? 
                <WinnerComponent /> :
                <>
                    <img className="adventureImg" src="/undraw_adventure.svg" alt="adventure" />
                    <div className="quiz">
                        {/* {
                            questions.map((item, ix) => {
                                return (ix === currentQuestion) ? 
                                <div key={item.id}>
                                    <strong>{item.text}</strong>
                                    {item.answers.map((option, idx) => {
                                        return <OptionComponent key={option.id} refs={refs.current[idx]} option={option} 
                                        showIcon={selection === option.id || incorrect === option.id} optionSelectCb={select}  /> 
                                    })}
                                </div>
                                : false
                            })
                        } */}
                        {
                            <div key={question.id}>
                                <strong>{question.text}</strong>
                                {question.answers.map((option: Answer, idx: number) => {
                                    return <OptionComponent key={option.id} refs={refs.current[idx]} option={option} 
                                    showIcon={selection === option.id || incorrect === option.id} optionSelectCb={select}  /> 
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