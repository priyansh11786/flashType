import React from 'react'
import TestLetter from '../TestLetter/TestLetter'
import './TypingContainer.css'

const TypingContainer = ({ timeStarted, timeRemaining, testInfo, onInputChange }) => {
    console.log("inside typing container-", testInfo)
    return (
        <div className="main-cont">
            <div className="timer-cont">
                <p className="timer">
                    00:
                    {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timeStarted && "Start typing to begin the test:-"}
                </p>
            </div>

            <div className="main-speed-container">
                <div className="left-container">
                    <div className="text-para textarea">
                        {
                            testInfo.map((IndividualLetterInfo, Index) => {
                                return <TestLetter key={Index} IndividualLetterInfo={IndividualLetterInfo} />
                            })
                        }
                    </div>
                </div>
                <div className="right-container">
                    <textarea onChange={(e) => onInputChange(e.target.value)} className="textarea" placeholder="Enter here for challenge"></textarea>
                </div>
            </div>
        </div>
    );
}

export default TypingContainer;