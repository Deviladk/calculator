import "./KeyButton.css"

const KeyButton = ({ onButtonClick }) => {

    const Buttonkey = ["7", "8", "9", "C", "4", "5", "6", "/", "1", "2", "3", "*", "0", ".", "+", "-", "="]

    return (
        <div className="ButtonContainer">
            {Buttonkey.map((ButtonName) => (
                <button key={ButtonName} className="ButtonKeyContainer" onClick={()=>onButtonClick(ButtonName)}>{ButtonName}</button>
            ))}
        </div>
    )



}

export default KeyButton;