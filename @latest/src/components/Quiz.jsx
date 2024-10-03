import React from 'react'
import Questions from './Questions';
const Quiz = () => {

  /* next button event handler*/ 
  function onNext(){
    console.log('On next click');
    
  }
   /* prev button event handler*/ 
  function onPrev(){
    console.log('On onPrev click');
    
  }
  return (
    <div className='conatiner'>
      <h1 className='title text-light'>Quiz Application</h1>
      {/* display question */}
      
    <Questions/>

      <div className='grid'>
        <button className='btn prev ' onClick={onPrev}>Previous</button>
        <button className='btn next'onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz