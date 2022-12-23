
import axios from "axios";
import { GET_BOOKINGCARS } from "../types/bookingcarType";

export const getbookingcar =()=>async(dispatch)=>{
    try {
      const res= await axios.get("/bookingcar/bookingcar");
       dispatch({type:GET_BOOKINGCARS,payload:res.data});
    } catch (error) {
        console.log(error) 
    }
}

export const Addbookingcar =(data)=>async(dispatch)=>{
    try {
      const res= await axios.post("/bookingcar/addbooking",data)
       dispatch(getbookingcar());
    } catch (error) {
        console.log(error)   
    }
    };

    export const Deletebookigcar =(id)=>async(dispatch)=>{
        try {
          const res= await axios.post("/api/bookingcar/delete/${id}")
           dispatch({type:getbookingcar,payload:res.data });
        } catch (error) {
            console.log(error)   
        }
        };

         
 export const Editbookingcar = (id)=>async(dispatch)=>{
    try {
        const res = await axios.put('/api/bookingcar/edit/${id}')
        dispatch({type:getbookingcar,payload:res.data});
    } catch (error) {
        console.log(error);
    }
 };