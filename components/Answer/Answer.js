const Answer = (answerText, selected, clicked) => {

    return (
        <div className="p-2 sm:w-1/2 w-full select-none">
            <div onClick={clicked} className={`${selected ? "bg-gray-100" : "bg-amber-400 ring ring-amber-300"} bg-gray-100 hover:bg-gray-300 active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300 rounded flex p-4 h-full items-center`}>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{answerText.answerText}</span>
            </div>
        </div>
    );
}

export default Answer;