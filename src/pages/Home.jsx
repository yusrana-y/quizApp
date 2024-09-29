import React from 'react'
import { Link } from 'react-router-dom'
import Quiz from './Quiz'

const Home = () => (
    <>


        <div className="flex flex-row ">
            <div className="w-1/2 flex align-center justify-center flex-col ms-8" style={{height:'80vh'}}>
                <h1 className='font-bold text-white text-7xl p-2 mb-4'>Quiz App</h1>
                {/* <h1 className='font-bold text-white text-2xl p-2 mb-4'>Choose your category</h1> */}
                <div>
                    <Link type="button" to={'/quiz'} className='border-2 border-white rounded p-3 text-white font-bold text-xl m-3'>START QUIZ</Link>
                    {/* <Link type="button" to={'/quiz'} className='border-2 border-white rounded p-3 text-white font-bold text-xl m-3'>HTML/CSS</Link> */}
                </div>           </div>
         
        </div>
    </>
)

export default Home
