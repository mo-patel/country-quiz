import { FC } from "react";
import '../styles/optionStyles.css';
import { Answer } from "../types/Answer";
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im'; 

interface OptionComponentProps {
    option: Answer;
    showIcon: boolean;
    selected: number;
    idx: number
    incorrectId: number;
    optionSelectCb: (option: Answer) => void;
}
export const OptionComponent: FC<OptionComponentProps> = ({option, showIcon, selected, idx, incorrectId, optionSelectCb}) => {
    const letters: string[] = ["A", "B", "C", "D"];
    let selectedClass = selected === option.id ? "selected " : "";
    let correctClass = selected && option.correct ? "correct ": "";
    let incorrectClass = incorrectId === option.id && !option.correct ? "incorrect ": "";
    return (
        <div className={selectedClass + correctClass + incorrectClass + "selectable optionRow"} onClick={() => optionSelectCb(option)} >
            <div>
                <strong>{letters[idx]}</strong>
                <p>{option.text}</p>
                <div className="iconTag">
                    {showIcon ?
                        
                    option.correct ? <TiTick className="icon" /> : <ImCross className="icon" />
                        : false
                    }
                </div>
            </div>
            
        </div>
    );
}