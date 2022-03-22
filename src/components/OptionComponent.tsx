import { FC } from "react";
import '../styles/optionStyles.css';

interface optionComponentProps {

}
export const OptionComponent: FC<optionComponentProps> = () => {
    return (
        <div className="optionRow">
            <div>
                <strong>A</strong>
                <p>option 1</p>
            </div>
            <img className="icon" src="/tick.png" alt="correct" />
        </div>
    );
}