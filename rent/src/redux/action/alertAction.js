import { ALERT_ERROS, CLEAR_ERROS } from "../types/alertType";



export const aletr_erros=(msg)=>async(dispatch)=>{
    const id=Math.random()

    dispatch({type:ALERT_ERROS,payload:{msg,id} })

    setTimeout(()=>{

        dispatch({type:CLEAR_ERROS,payload:id});

    },3000);


}