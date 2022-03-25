import { FC } from "react";
import "../styles/quizCardStyles.css"

interface quizCardProps {

}

export const QuizCardComponent: FC<quizCardProps> = () => {
    return (
        <div className="quizCardParent">
            <h2>Country quiz</h2>
            <div className="quizCard">
                <img className="adventureImg" src="/undraw_adventure.svg" alt="adventure" />
                <div className="quiz">
                    text flow
                </div>
            </div>
        </div>
    );
}