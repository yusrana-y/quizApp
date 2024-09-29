import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import QBank from '../Questions/QBank'
import Confetti from 'react-confetti'

const Quiz = () => {
  const [result, setResult] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userChoice, setUserChoice] = useState(0)

  // console.log(QBank.length);

  // const handleNextQ = () => {
  //   // alert('im clicked!')
  //   if (currentQuestion < QBank.length - 1) {
  //     if (userChoice == QBank[currentQuestion].answer) {
  //       setScore(score + 1)
  //       console.log(score);
  //     }
  //     setCurrentQuestion(currentQuestion + 1)
  //   }
  //   else {
  //     setResult(true)
  //   }    
  // }
  const handleNextQ = () => {
    if (userChoice === 0) {
      // Prevent moving to the next question if no choice has been made
      alert("Please select an answer.");
      return;
    }

    // Check the answer
    if (userChoice === QBank[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Proceed to the next question
    setUserChoice(0); // Reset user choice
    if (currentQuestion < QBank.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(true);
    }
  };


  return (
    <div>
      <div className="grid grid-cols-2 mt-4">
        {
          result ?
            <div className='container bg-white rounded shadow-lg text-center ms-4 mt-5 p-5'>
               {score === QBank.length && <Confetti />}
              <h1 className='text-5xl font-bold text-purple-500 mb-4'>Result</h1>
              <h1 className='text-xl'>Total Questions: <span className='font-bold'>{QBank.length}</span> </h1>
              <h1 className='text-xl mt-4'>Your Score : <span className='text-3xl font-bold'>{score}</span>/5</h1>
              <div className='flex align-center justify-center gap-5 mb-6'>
                <h2 className='text-green-600 font-bold'>Correct Answers: <span className='text-xl'>{score}</span></h2>
                <h2 className='text-red-600 font-bold'>Wrong Answers: <span className='text-xl'>{5 - score}</span></h2>
              </div>
              <Link type="button" to={'/'} className=' rounded p-3 font-bold text-xl bg-purple-500 text-white'>HOME</Link>
            </div>
            :
            <div className='container border-2 border-white-600 rounded p-6  text-white m-5'>
              <h1><span className='text-2xl'>{currentQuestion + 1}</span>/5</h1>
              <h1 className='font-bold text-xl align-center m-3 text-pretty'>{QBank[currentQuestion].question}</h1>
              <div className="flex flex-col m-3">
                <ul>
                  {QBank[currentQuestion].choices.map((choice, i) => (
                    <li ><button key={i + 1} className='border-2 w-3/4 rounded p-2 mt-2  shadow-xl hover:bg-slate-400' type="button" onClick={() => setUserChoice(i + 1)} >{`${i + 1}. ${choice}`}</button></li>
                  ))}
                </ul>
              </div>
              <div className='flex justify-between'>
                <button type="button" className='ml-auto border rounded p-2 text-lg font-bold w-1/4' style={{ backgroundColor: '#7B679A' }} onClick={handleNextQ}>NEXT</button>

              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Quiz
