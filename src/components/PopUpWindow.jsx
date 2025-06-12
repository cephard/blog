import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function PopUpWindow(props) {
    const [popUpOn, setPopUpOn] = useState();
    const [innerErrorText, setInnerErrorText] = useState();

    function hidePopUpWindow() {
        setPopUpOn(false);
        setInnerErrorText(null);
    }

    useEffect(() => {
        if (props.errorText !== null) {
            setInnerErrorText(props.errorText);
            setPopUpOn(true);
        }
    }, [props.errorText])

    return (
        <div
            style={{ background: 'rgba(0, 0, 0, 0.5)' }}//using syle to make the background tranparent-ish
            className={`${popUpOn ? 'fixed' : 'hidden'}  z-50 flex inset-0 items-center justify-center bg-gray-700`}>
            <button
                className="flex justify-center items-center absolute right-0 top-0 text-2xl m-4 p-2 rounded-full w-10 h-10 hover:bg-gray-400 hover:text-white"
                onClick={(event) => {
                    event.preventDefault();
                    hidePopUpWindow();
                }}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="flex items-center justify-center text-2xl text-red-500 bg-white rounded shadow-xl w-1/2 h-1/2">{innerErrorText}</div>
        </div>
    )
}

export default PopUpWindow