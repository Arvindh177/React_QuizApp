import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'

function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
        setCurrentQuestion(currentQuestion+1);
        }
        else{

        }
    }

    const updateScore = ()=> {
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
  return (
    <div>
      <p className='heading-txt' >Quiz APP</p>
      <div className='container'>
        <div className='question'>
             <span className='question'>
                <span id='question-number'>{currentQuestion+1}</span>
                <span id='question-txt'>{QuizData[currentQuestion].question}</span>

             </span>
        </div>
        <div className='option-container'>
           {QuizData[currentQuestion ].options.map((option,i)=> {
            return(
                <button className='option-btn'
                onClick={()=>setClickedOption(i+1 )}
                >
                   {option}
                </button>
            )
           })}
        </div>
        <input type="button" value="Next" id='next-button' onClick={changeQuestion}></input>
      </div>
    </div>
  )
}

export default Quiz
