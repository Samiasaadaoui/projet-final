import { GET_CARS } from "../types/carType";


const initialState = { 
    cars:[],
};

const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_CARS:
  
    return{...state,cars:payload.cars};

  default:
    return state;
  }
};
export default carReducer;