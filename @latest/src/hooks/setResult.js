import * as Action from '../redux/result_reducer'


export const PushAnswer = (result) => async (dispatch) =>{
    try{
         await dispatch(Action.pusResultAction(result))
    }catch(error){
        console.log(error);
        
    }
}
export const updateResult = (index) => (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index))
    }catch(error){
        console.log(error);
        
    }
}