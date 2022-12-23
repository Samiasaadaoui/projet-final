import { DELETE, EDITION, FAIL, GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../types/authType";


const initialState = {
    contact:{},
    errors:[],
}

const authReducer= (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token",payload.token);
        return{...state,contact:payload.contacts};
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state,contact: payload.contacts };
      case GET_CURRENT:
       
        return{...state,contact:payload.contact};
        case DELETE:
          localStorage.removeItem('token');
          return{...state}
          case EDITION:
            localStorage.removeItem('token');
            return{...state}
          
        case FAIL:
          return{...state,contact:payload.errors,contact:null};
          case LOGOUT:
            localStorage.removeItem('token');
            return{...state,contact:null};
     default:
     return state
  }
}
export default authReducer