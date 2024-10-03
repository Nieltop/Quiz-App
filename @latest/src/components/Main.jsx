import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


const Main = () => {
    const inpuRef = useRef(null)
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <ol>
            <li>You Will be Asked 10 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You are allow to choose only one options.</li>
            <li>You can review and change answers before the quiz finishes.</li>
            <li>The result will be declared at the end of the quiz.</li>

        </ol>
        <form id='form'>
            <input ref={inpuRef} type="text" placeholder='Username*' />
        </form>

        <div className='start'>
        <Link className='btn' to={'quiz'}>Start Quiz</Link>
        </div>
    </div>
  )
}

export default Main