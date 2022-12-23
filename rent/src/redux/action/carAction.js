
import axios from "axios"
import { GET_CARS } from "../types/carType";



export const getcar =()=>async(dispatch)=>{
try {
  const res= await axios.get("/car/cars");
   dispatch({type:GET_CARS,payload:res.data});
} catch (error) {
    console.log(error)   
}
};


export const addcar =(newcar)=>async(dispatch)=>{
try {
  const res= await axios.post("/car/add",newcar)
   dispatch(getcar());
} catch (error) {
    console.log(error)   
}
};

 export const deletecar =(id)=>async(dispatch)=>{
try {
    const res = await axios.delete(`/car/del/${id}`)
    dispatch(getcar());
    
} catch (error) {
    console.log(error)
    
}
 };

 export const editecar =(id, update)=>async(dispatch)=>{
    try {
        const res = await axios.put(`/car/edit/${id}`,update)
        dispatch(getcar());
        
    } catch (error) {
        console.log(error);
        
    }
     };
