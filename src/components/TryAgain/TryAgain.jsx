import React from 'react'
import './TryAgain.css'

const TryAgain = ( { words,characters,wpm,startAgain } ) => {
    return(
        <div className="try-again-container">
            <h1 className="test-header">Test Results:-</h1>
            <div className="three-container">
                <p>
                    <b>Characters:</b> {characters}
                </p>

                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>

            <div className="button-class">
                <button onClick={() => startAgain()} className="open-buttons retry-button">Re-try</button>
                <button onClick={() => { window.open("https://www.facebook.com","facebook-share-dialog","width:800,height:600")}} className="open-buttons share-button">Share</button>
                <button onClick={() => { window.open("https://www.twitter.com","Twitter","width:800,height:600")}} className="open-buttons tweet-button">Tweet</button>
            </div>
        </div>
    )
}

export default TryAgain;