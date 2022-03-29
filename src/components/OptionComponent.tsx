import { FC, RefObject } from "react";
import '../styles/optionStyles.css';
import { Answer } from "../types/Answer";
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im'; 

interface optionComponentProps {
    refs: RefObject<any>;
    option: Answer;
    showIcon: boolean;
    optionSelectCb: (option: Answer) => void;
}
export const OptionComponent: FC<optionComponentProps> = ({refs, option, showIcon, optionSelectCb}) => {
    const letters: string[] = ["A", "B", "C", "D"];
    return (
        <div className="selectable optionRow" ref={refs} onClick={(e) => optionSelectCb(option)} >
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