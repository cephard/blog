import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function PopUpWindow(errorText) {
    return (
        <div
            style={{ background: 'rgba(0, 0, 0, 0.5)' }}
            className="fixed z-50 flex inset-0 items-center justify-center bg-gray-700">
            <span className="flex justify-center items-center absolute right-0 top-0 text-2xl m-4 p-2 rounded-full w-10 h-10 hover:bg-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faXmark} />
            </span>
            <div className="flex items-center justify-center text-2xl text-red-500 bg-white rounded shadow-xl w-1/2 h-1/2">errorText</div>
        </div>
    )
}

export default PopUpWindow