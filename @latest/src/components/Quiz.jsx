import React, { useState } from 'react';
import Questions from './Questions';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Quiz = () => {
  const [check, setChecked] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  function onNext() {
    if (trace < queue.length) {
      
      if (result[trace] !== check) {
        dispatch(PushAnswer(check));
      }

   
      dispatch(MoveNextQuestion());
    }

    setChecked(undefined);
  }

 
  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());

      
      setChecked(result[trace - 1]);
    }
  }


  function onChecked(check) {
    setChecked(check);
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to={'/result'} replace="true" />;
  }

  return (
    <div className="container">
      <h1 className='Quize'>Quiz Application</h1>

    
      <Questions onChecked={onChecked} />

      <div className="grid">
        
        {trace > 0 && (
          <button className="btn prev" onClick={onPrev}>
            Previous
          </button>
        )}

        {/* Next button */}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
