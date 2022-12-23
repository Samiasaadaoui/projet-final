
import axios from "axios"
import { GET_CONTACTS } from "../types/contactType";



export const getcontact =()=>async(dispatch)=>{
try {
  const res= await axios.get("/api/contact")
   dispatch({type:GET_CONTACTS,payload:res.data});
} catch (error) {
    console.log(error)   
}
};



export const addcontact = (newcontact)=>async(dispatch)=>{

    try {
        const res = await axios.post("/contacts/",newcontact)
        dispatch(getcontact())
    } catch (error) {
        console.log(error);
        
    }
} 


 export const deletecontact = (id)=>async(dispatch)=>{
    try {
        const res = await axios.delete(`/contact/dele/${id}`)
        dispatch(getcontact());
    } catch (error) {
        console.log(error);
    }
 }


 
 export const editcontact = (id,update)=>async(dispatch)=>{
    try {
        const res = await axios.put(`/contact/put/${id}`,update);
        dispatch(getcontact());
    } catch (error) {
        console.log(error);
    }
 };