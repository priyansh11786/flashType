import React from 'react'
import './ChallengeDetailsCard.css'

const ChallengeDetailsCard = ({ cardName,cardValue }) => {
    return(
       <div className="challenge-container">
           <div className="cardname">{cardName}</div>
           <div className="cardvalue">{cardValue}</div>
       </div>

    );
}

export default ChallengeDetailsCard;