import { DELETE, EDITION, FAIL, GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../types/authType";
import axios from "axios";
import { ALERT_ERROS } from "../types/alertType";
import { Navigate } from "react-router-dom";
import { aletr_erros } from "./alertAction";

export const register = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/contact/register", data);
    dispatch({ type: REGISTER, payload: res.data });
    
  } catch (error) {
    error.response.data.errors.forEach((element) => {
      dispatch(aletr_erros(element.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
  }




export const login = (data,navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/contact/login", data);
    dispatch({ type: LOGIN, payload: res.data });
   navigate('/profile')
  } catch (error) {
    error.response.data.errors.forEach((element) => {
      dispatch(aletr_erros(element.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
  }


export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    }
  };

  try {
    const res = await axios.get("/contact/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const del_user=(id,navigate)=>async(dispatch)=>{
  try {
    await axios.delete(`/contact/dele/${id}`)
    dispatch({ type:DELETE});
    navigate("/home")
  } catch (error) {
    console.log(error)
  }
}





export const logout = () => {
  return { type: LOGOUT };
}