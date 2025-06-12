import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function PopUpWindow({ errorText, changeErrorText }) {
    const [popUpOn, setPopUpOn] = useState();

    function hidePopUpWindow() {
        setPopUpOn(false);
        changeErrorText(null);
    }

    useEffect(() => {
        if (errorText !== null) {
            setPopUpOn(true);
        }
    }, [errorText])

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
            <div className="flex items-center justify-center text-2xl text-red-500 bg-white rounded shadow-xl w-3/4 h-3/4 p-4">
                {errorText}</div>
        </div>
    )
}

export default PopUpWindow