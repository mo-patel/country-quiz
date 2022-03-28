import { FC } from "react";
import "../styles/winnerStyles.css";

interface winnerComponentProps {

}

export const WinnerComponent: FC<winnerComponentProps> = () => {
    return (
        <div className="winnerParent">
            <img src="/undraw_winners.svg" alt="Results" />
            <h1>Results</h1>
            <p>You got <span>5</span> correct answers</p>
            <button className="selectable">Try again</button>
        </div>
    );
}