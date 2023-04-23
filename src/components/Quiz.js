import React from 'react'
import { QuizData } from '../Data/QuizData'

function Quiz() {
  return (
    <div>
      <p className='heading-txt' >Quiz APP</p>
      <div className='container'>
        <div className='question'>

        </div>
        <div className='option-container'>
           {QuizData[0].options.map((option,i)=> {
            return(
                <button className='option-btn'>

                </button>
            )
           })}
        </div>
      </div>
    </div>
  )
}

export default Quiz
