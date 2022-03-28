import { FC } from "react";
import '../styles/optionStyles.css';
import { Answer } from "../types/Answer";

interface optionComponentProps {
    option: Answer;
    iconId: number; // 0: do not show, 1: show tick, 2: show cross
}
export const OptionComponent: FC<optionComponentProps> = ({option, iconId}) => {
    const letters: string[] = ["A", "B", "C", "D"];
    return (
        <div className="selectable optionRow">
            <div>
                <strong>{letters[option.id]}</strong>
                <p>{option.text}</p>
            </div>
            {iconId > 0 ?
                <img className="icon" src={iconId === 1 ? "/tick.png" : "/cross.png"} alt={iconId === 1 ? "correct" : "incorrect"}/>
                : false
            }
        </div>
    );
}