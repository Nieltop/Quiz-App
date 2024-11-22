import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'


const Main = () => {
    const inpuRef = useRef(null)

    const dispatch = useDispatch()

    // function startQuiz(){
    //   if(inpuRef.current?.value){
    //     dispatch(setUserId(inpuRef.current?.value))
    //   }
    // }
    function startQuiz() {
      const username = inpuRef.current?.value.trim();
      if (username) {
        dispatch(setUserId(username));
      } else {
        alert("Please enter a valid username");
      }
    }
     
  return (
    <div className='container mx-auto'>
        <h1 className='main'>Quiz Application</h1>

        <ol>
  <li>You will be asked 10 questions, one after another.</li>
  <li>Each correct answer awards 10 points.</li>
  <li>Each question has three options; you can choose only one.</li>
  <li>You can review and change answers before the quiz ends.</li>
  <li>Your result will be declared at the end of the quiz.</li>
</ol>

        <form id='form'>
            <input ref={inpuRef} type="text" placeholder='Username' autoFocus/>
        </form>
<br />
        {/* <div className='start'>
        <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div> */}
            <center>
    <button class="Btn rounded-2 bg" onclick="submitDetails()">

        <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
        
        {/* <div class="text">Submit</div> */}
        <Link className='text' to={'quiz'} onClick={startQuiz}>StartQuiz</Link>
    </button>                       
 </center>
    </div>
  )
}

export default Main