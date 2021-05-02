import React from 'react'
import './TypingChallengeContainer.css'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingContainer from '../TypingContainer/TypingContainer'

const TypingChallengeContainer = ({ SelectedPara,timeStarted,timeRemaining,words,characters,wpm,testInfo,onInputChange }) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-card">

                {/* <p>1</p> */}
                <ChallengeDetailsCard cardName="Words" cardValue={words}/>

                {/* <p>2</p> */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>

                {/* <p>3</p> */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
            </div>

            <div className="typewriter-cont">
                <TypingContainer onInputChange={onInputChange} testInfo={testInfo} SelectedPara={SelectedPara} timeStarted={timeStarted} timeRemaining={timeRemaining}/>
            </div>
        </div>

    );
}

export default TypingChallengeContainer;