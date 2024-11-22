import { useEffect, useState } from 'react'
import * as Action from '../redux/question_reducer'
import data, { answers } from '../database/data'



import { useDispatch } from 'react-redux'


export const useFetchQuestion = () =>{
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({isLoding : false, apiData : [], serverError: null})

    useEffect(() => {
        setGetData(prev => ({...prev, isLoding :true}));
       


        (async () => {
            try {
                let question = await data;

                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoding : false})); 
                    setGetData(prev => ({...prev, apiData : {question, answers}}));
                    
                    
                    dispatch(Action.startExampleAction({question, answers}))
                }else{
                    throw new Error("No Question Avaliable")
                }
            }catch (error){
                setGetData(prev => ({...prev, isLoding : false},8000));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    },[dispatch])
    return[getData, setGetData]
}

/*MoveAction Dispacth function */ 

export const MoveNextQuestion = () => async(dispatch)=>{

    try{
        dispatch(Action.moveNextAction());
    }catch (error){
        console.log(error);
        
    }
        
}


/*PreviousAction Dispacth function */ 

export const MovePrevQuestion = () => async(dispatch)=>{

    try{
        dispatch(Action.movePrevAction());
    }catch (error){
        console.log(error);
        
    }

}
