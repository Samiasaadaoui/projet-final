import { GET_CONTACTS } from "../types/contactType";


const initialState = { 
    contacts:[],
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_CONTACTS:
  
    return{...state,contacts:payload.contact};

  default:
    return state;
  }
};
export default contactReducer;
