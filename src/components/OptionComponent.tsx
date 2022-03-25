import { FC } from "react";
import '../styles/optionStyles.css';

interface optionComponentProps {
    optionId: number;
    option: string;
    iconId: number; // 0: do not show, 1: show tick, 2: show cross
}
export const OptionComponent: FC<optionComponentProps> = ({optionId, option, iconId}) => {
    const letters: string[] = ["A", "B", "C", "D"];
    return (
        <div className="optionRow">
            <div>
                <strong>{letters[optionId]}</strong>
                <p>{option}</p>
            </div>
            {iconId > 0 ?
                <img className="icon" src={iconId === 1 ? "/tick.png" : "/cross.png"} alt={iconId === 1 ? "correct" : "incorrect"}/>
                : false
            }
        </div>
    );
}