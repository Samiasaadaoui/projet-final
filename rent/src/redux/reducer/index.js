import alertReducer from "./alertReducer"
import authReducer from "./authReducer"
import bookingcarReducer from "./bookingcarReducer"
import carReducer from "./carReducer"
import contactReducer from "./contactReducer"
import { combineReducers } from "redux";
const rootReducer = combineReducers({alertReducer,authReducer,bookingcarReducer,carReducer,contactReducer });
export default rootReducer;