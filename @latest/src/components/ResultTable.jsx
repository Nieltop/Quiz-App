import React, { useEffect } from 'react'
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';
import { useDispatch, useSelector } from 'react-redux';


useEffect   
const ResultTable = () => {

  const dispatch = useDispatch()

  const {questions : {queue, answers }, result : {result, userId}}= useSelector(state => state)

  useEffect(() => {
    console.log(flag);
    
  })

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result)
  const earnPoints = earnPoints_Number(result, answers, 10)
  const flag = flagResult(totalPoints, earnPoints)

  const resultColor = flag ? 'green' : 'red';
  return (
    <div className='main'>  
        <table>
        <thead className='table-healder'>
        <tr className='table-row'>
            <td>Name</td>
            <td>Attempt</td>
            <td>Earn Points</td>
            <td>Result</td>
            
        </tr>
        </thead>

        <tbody>
          <tr className="table-body">
            <td>{userId}</td>
            <td style={{ color: resultColor }}>{attempts || 0}</td>
            <td style={{ color: resultColor }}>{earnPoints || 0}</td>
            <td style={{ color: flag ? '#2aff95' : '#ff2a66' }}>
              {flag ? 'Passed' : 'Failed'}
            </td>
          </tr>
        </tbody>

        </table>
    </div>
  )
}

export default ResultTable


// import React, { useEffect } from 'react';
// import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper';
// import { useDispatch, useSelector } from 'react-redux';

// const ResultTable = () => {
//   const dispatch = useDispatch();

//   const {
//     questions: { queue, answers },
//     result: { result, userId },
//   } = useSelector((state) => state);

//   useEffect(() => {
//     console.log(flag);
//   });

//   const totalPoints = queue.length * 10;
//   const attempts = attempts_Number(result);
//   const earnPoints = earnPoints_Number(result, answers, 10);
//   const flag = flagResult(totalPoints, earnPoints);

//   // Conditional colors for attempts and earnPoints
//   const resultColor = flag ? 'green' : 'red';

//   return (
//     <div className="main">
//       <table>
//         <thead className="table-header">
//           <tr className="table-row">
//             <td>Name</td>
//             <td>Attempt</td>
//             <td>Earn Points</td>
//             <td>Result</td>
//           </tr>
//         </thead>

//         <tbody>
//           <tr className="table-body">
//             <td>{userId}</td>
//             <td style={{ color: resultColor }}>{attempts || 0}</td>
//             <td style={{ color: resultColor }}>{earnPoints || 0}</td>
//             <td style={{ color: flag ? '#2aff95' : '#ff2a66' }}>
//               {flag ? 'Passed' : 'Failed'}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ResultTable;
