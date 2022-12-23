import { ALERT_ERROS, CLEAR_ERROS } from "../types/alertType";


const initialState =[];

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ALERT_ERROS:
    return[...state,payload]
  
    case CLEAR_ERROS:
        return state.filter((el)=>el.id!= payload);

  default:
    return state;
  }
}
export default alertReducer