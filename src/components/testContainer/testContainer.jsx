import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import './testContainer.css'

const testContainer = ({ SelectedPara,timeStarted,timeRemaining,words,characters,wpm,testInfo,onInputChange,startAgain }) => {
    
    // const timeVal = 60
    return (
        <div className="main-test-container">
            {
                timeRemaining > 0 ? (
                    <div className="type-challenge-cont">
                        <TypingChallengeContainer onInputChange={onInputChange} testInfo={testInfo} SelectedPara={SelectedPara} timeStarted={timeStarted} timeRemaining={timeRemaining} words={words} characters={characters} wpm={wpm} />
                    </div>
                ) : (
                    <div className="try-again-cont">
                        <TryAgain startAgain={startAgain} words={words} characters={characters} wpm={wpm} />
                    </div>
                )
            }

        </div>
    );
}

export default testContainer;