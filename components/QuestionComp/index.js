import React, { useState } from 'react';

const QuestionComp = ({ catName, questionText, answers, submitButton }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null)


    const answerPressed = (index) => {
        if (index === selectedAnswer) {
            setSelectedAnswer(null)
        } else {
            setSelectedAnswer(index)
        }
    }

    const submitedAnswer = () => {
        // checks that an answer is actually selected
        if (selectedAnswer !== null) {
            submitButton(selectedAnswer)
        } else {
            console.log('No answer selected error')
        }

    }

    let answerOptions = null;
    if (answers) {
        answerOptions =
            answers.map((el, index) => {
                return <div key={index} className="p-2 sm:w-1/2 w-full select-none">
                    <div onClick={() => answerPressed(index)} className={`${index !== selectedAnswer ? "bg-gray-100" : "bg-amber-400 ring ring-amber-300"} bg-gray-100 hover:bg-gray-300 active:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-300 rounded flex p-4 h-full items-center`}>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                        <span className="title-font font-medium">{el.AnswerText}</span>
                    </div>
                </div>
            });
    }

    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-5">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">{catName}</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">{questionText}</p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

                    {answerOptions}

                </div>
                <button onClick={submitedAnswer} className="flex mx-auto mt-10 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Submit</button>
                <button className="flex mx-auto mt-10 text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Skip</button>
            </div>
        </section>
    );
}

export default QuestionComp;