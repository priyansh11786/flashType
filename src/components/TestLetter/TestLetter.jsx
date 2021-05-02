import React from 'react'
import './TestLetter.css'

const TestLetter = ({ IndividualLetterInfo }) => {
   const { status } = IndividualLetterInfo
   
   const StatusClass = {
        correct : "test-class-correct",
        incorrect : "test-class-incorrect",  
        notAttempted : "test-class-notattempted"
   }[status]

    return(
       <span className={`test-class ${StatusClass}`}>{ IndividualLetterInfo.testCharacter}</span>
    )
}

export default TestLetter;