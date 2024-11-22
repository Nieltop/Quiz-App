import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*import components*/
import Quiz from './components/Quiz'
import Result from './components/Result'
import Main from './components/Main'
import { CheckUserExist } from './helper/helper'


import{createBrowserRouter,RouterProvider} from 'react-router-dom'

/** react routers */
const router = createBrowserRouter([
{
  path : '/',
  element : <Main></Main>
},
{
  path : '/Quiz',
  element : <CheckUserExist><Quiz/></CheckUserExist>
},{
  path : '/result',
  element : <CheckUserExist><Result/></CheckUserExist> 
},
]) 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <RouterProvider router={router}/>
    </>
  );
}

export default App
