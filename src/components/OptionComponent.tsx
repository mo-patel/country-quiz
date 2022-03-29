import { FC } from "react";
import '../styles/optionStyles.css';
import { Answer } from "../types/Answer";
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im'; 

interface optionComponentProps {
    option: Answer;
    showIcon: boolean;
    selected: number;
    incorrectId: number;
    optionSelectCb: (option: Answer) => void;
}
export const OptionComponent: FC<optionComponentProps> = ({option, showIcon, selected, incorrectId, optionSelectCb}) => {
    const letters: string[] = ["A", "B", "C", "D"];
    let selectedClass = selected === option.id ? "selected " : "";
    let correctClass = selected && option.correct ? "correct ": "";
    let incorrectClass = incorrectId === option.id && !option.correct ? "incorrect ": "";
    return (
        <div className={selectedClass + correctClass + incorrectClass + "selectable optionRow"} onClick={() => optionSelectCb(option)} >
            <div>
                <strong>{letters[option.id - 1]}</strong>
                <p>{option.text}</p>
            </div>
            {showIcon ?
                
               option.correct ? <TiTick className="icon" /> : <ImCross className="icon" />
                : false
            }
        </div>
    );
}