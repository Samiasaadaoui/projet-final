import { GET_BOOKINGCARS } from "../types/bookingcarType";


const initialState = {
   bookings:[]
}

const  bookingcarReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case  GET_BOOKINGCARS:
    return { ...state,bookings:payload.bookingcars}

  default:
    return state
  }
}
export default bookingcarReducer;



