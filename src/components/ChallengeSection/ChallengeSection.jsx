import React from 'react'
import './ChallengeSection.css'
import TestContainer from '../testContainer/testContainer'

const ChallengeSection = ({ SelectedPara,timeStarted,timeRemaining,words,characters,wpm,testInfo,onInputChange,startAgain }) => {
    return(
        <div  data-aos="fade-down-left"className="challenge-section-container">
            <div className="challenge-section-header">
                <h1>Take the Test Here!</h1>
            </div>

            <TestContainer startAgain={startAgain} onInputChange={onInputChange} testInfo={testInfo} SelectedPara={SelectedPara} timeStarted={timeStarted} timeRemaining={timeRemaining} words={words} characters={characters} wpm={wpm}/>
        </div>
    );
}

export default ChallengeSection;