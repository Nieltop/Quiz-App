import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*import components*/
import Quiz from './components/Quiz'
import Result from './components/Result'
import Main from './components/Main'

import{createBrowserRouter,RouterProvider} from 'react-router-dom'

/** react routers */
const router = createBrowserRouter([
{
  path : '/',
  element : <Main></Main>
},
{
  path : '/Quiz',
  element : <Quiz></Quiz>
},{
  path : '/result',
  element : <Result></Result>
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
