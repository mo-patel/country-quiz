import { FC } from "react";
import "../styles/winnerStyles.css";

interface WinnerComponentProps {
    correctAnswers: number
    retryCb: () => void;
}

export const WinnerComponent: FC<WinnerComponentProps> = ({correctAnswers, retryCb}) => {
    return (
        <div className="winnerParent">
            <img src="/undraw_winners.svg" alt="Results" />
            <h1>Results</h1>
            <p>You got <span>{correctAnswers}</span> correct answers</p>
            <button className="selectable" onClick={()=> retryCb()}>Try again</button>
        </div>
    );
}