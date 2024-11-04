import {combineReducers, configureStore} from '@reduxjs/toolkit'
import questions from '../components/Questions'

import questionReducer  from './question_reducer'
import  resultReducer from './result_reducer'
import Result from '../components/Result'



const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})


export default configureStore({ reducer:rootReducer}); 