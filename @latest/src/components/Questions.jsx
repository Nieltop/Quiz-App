import React, { useState } from 'react'

const questions = () => {

const [checked, setChecked] = useState(undefined)

  function onSelect(){
    
    console.log('radio button change');
    
  }

  return (
    <div className='questions'>
        <h2 className="text-light">Simple Question</h2>

        <ul>
            <li>
              <input type="radio" value={false} name='options' id='q1-option' onChange={onSelect} />
            <label className='text-primary' htmlFor="q1-option">option</label>
            <div className='check checked'></div>
            </li>
        </ul>
    </div>
  )
}

export default questions