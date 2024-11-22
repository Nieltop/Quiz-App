import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/*Custom Hook*/
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'



const questions =({onChecked}) => {

const [checked, setChecked] = useState(undefined)
const { trace } = useSelector(state => state.questions);
const result = useSelector(state => state.result.result);
const [{isLoding, apiData, serverError}] = useFetchQuestion()
// useSelector(state => console.log(state));



  // Function to get a random question
  // const getRandomQuestion = (questions) => {
  //   const randomIndex = Math.floor(Math.random() * questions.length);
  //   return questions[randomIndex];
  // };

  const questions = useSelector(state => state.questions.queue[state.questions.trace])
const dispatch = useDispatch()


  useEffect(() => {
    dispatch(updateResult({trace, checked}))
  },[checked])


  function onSelect(i){
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace, checked}));
  }

  if(isLoding) return <h3 className='loader'>loading...</h3>
  if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error.."}</h3>

  return (
    <div className='questions'>
        <h2 className="text-light">{questions?.question}</h2>

        <ul key={questions?.id}>
          {
            questions?.options.map((q, i)=>(
              <li key={i} style={{listStyleType:'none'}}>
              <input type="radio" value={false} name='options' id={`q${i}`} onChange={() => onSelect(i)} />
            
            <label className='text-primary' htmlFor={`q${i}`} >{q}</label>
            <div className={`check ${result[trace] == i ? 'checked' : '' }`}></div>
            </li> 
            ))
          }
        </ul>
    </div>
  ) 
}

export default questions